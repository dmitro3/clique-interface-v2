import { Box, Stack, styled, Typography, useTheme } from '@mui/material'
import { RowCenter } from '../ProposalItem'
import CheckBox from 'components/Checkbox'
import { BlackButton } from 'components/Button/Button'
import { VotingTypes } from 'state/buildingGovDao/actions'
import { useCallback, useMemo, useState } from 'react'
import VoteModal from './VoteModal'
import { useVoteModalToggle } from 'state/application/hooks'
import { TokenAmount } from 'constants/token'
import JSBI from 'jsbi'
import { useProposalDetailInfoProps } from 'hooks/useBackedProposalServer'

export const VoteWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  borderRadius: theme.borderRadius.default,
  boxShadow: theme.boxShadow.bs2,
  padding: '32px',
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: 'unset',
    padding: '20px 16px'
  }
}))

export default function Vote({ proposalInfo }: { proposalInfo: useProposalDetailInfoProps }) {
  const theme = useTheme()
  const voteModalToggle = useVoteModalToggle()

  const [checkList, setCheckList] = useState<boolean[]>(proposalInfo.options.map(() => false))
  const setCheckListIndex = useCallback(
    (index: number, value: boolean) => {
      if (proposalInfo.votingType === VotingTypes.SINGLE) {
        const _checkList = checkList.map(() => false)
        _checkList[index] = value
        setCheckList(_checkList)
      } else {
        const _checkList = [...checkList]
        _checkList[index] = value
        setCheckList(_checkList)
      }
    },
    [checkList, proposalInfo.votingType]
  )

  const selectIds = useMemo(
    () => checkList.map((val, index) => (val ? index : undefined)).filter(i => i !== undefined) as number[],
    [checkList]
  )

  return (
    <VoteWrapper>
      {!proposalInfo.yourVotes ? (
        <>
          <RowCenter>
            <Typography variant="h6" fontWeight={500}>
              Cast Your Vote
            </Typography>
            <Typography fontSize={13} color={theme.palette.text.secondary}>
              {proposalInfo.votingType === VotingTypes.SINGLE ? 'Single Vote' : 'Multi Vote'}
            </Typography>
          </RowCenter>
          <Stack spacing={20} mt={24} mb={16}>
            {proposalInfo.options.map(({ optionContent }, index) => (
              <CheckBox
                key={index}
                disabled={proposalInfo.status !== 'Open'}
                checked={checkList[index]}
                onChange={(e: any) => {
                  setCheckListIndex(index, e.target.checked)
                }}
                label={optionContent}
              />
            ))}
          </Stack>
          {proposalInfo.status === 'Open' && proposalInfo.yourVotes === 0 && (
            <>
              <BlackButton
                height="44px"
                disabled={checkList.filter(i => i).length === 0}
                onClick={voteModalToggle}
                width="112px"
              >
                Vote Now
              </BlackButton>
              <VoteModal proposalInfo={proposalInfo} voteFor={selectIds} />
            </>
          )}
        </>
      ) : (
        <VoteResult type={proposalInfo.votingType} myVoteInfo={proposalInfo.yourVotes} />
      )}
      <RowCenter mt={5}>
        <Typography fontSize={12} color={theme.palette.text.secondary}>
          Minimum Votes Needed For Success
        </Typography>
        <Typography fontSize={12}>
          {/* {proposalInfo.votingThreshold?.toSignificant(6, {
            groupSeparator: ','
          }) || '-'} */}
        </Typography>
      </RowCenter>
    </VoteWrapper>
  )
}

function VoteResult({ type, myVoteInfo }: { type: VotingTypes; myVoteInfo: any | undefined }) {
  const theme = useTheme()
  const total = useMemo(() => {
    if (!myVoteInfo?.length) return undefined
    let ret = new TokenAmount(myVoteInfo[0].amount.token, JSBI.BigInt(0))
    for (const { amount } of myVoteInfo) {
      ret = ret.add(amount)
    }
    return ret
  }, [myVoteInfo])
  return (
    <Stack spacing={16}>
      <Typography variant="h6" fontWeight={500}>
        Your choice
      </Typography>
      {myVoteInfo?.map((item: any, index: number) => (
        <RowCenter
          key={index}
          sx={{
            background: theme.bgColor.bg4,
            borderRadius: '8px',
            padding: '10px 14px'
          }}
        >
          <Typography fontSize={14} fontWeight={600}>
            {item.name}
          </Typography>
          {type === VotingTypes.MULTI && (
            <Typography fontWeight={600} fontSize={12}>
              {item.amount.toSignificant(6, { groupSeparator: ',' })}
            </Typography>
          )}
        </RowCenter>
      ))}
      <RowCenter>
        <Typography fontSize={13} fontWeight={600} color={theme.palette.text.secondary}>
          {type === VotingTypes.SINGLE ? 'Your votes' : 'Your total votes'}
        </Typography>
        <Typography fontSize={14} fontWeight={600}>
          {total?.toSignificant(6, { groupSeparator: ',' }) || '--'}
        </Typography>
      </RowCenter>
    </Stack>
  )
}
