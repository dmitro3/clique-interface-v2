import { Box, Typography } from '@mui/material'
import { HomeListProp, useHomeDaoList } from 'hooks/useBackedDaoServer'
import { UserProfileDaoProp } from 'hooks/useBackedProfileServer'
import useBreakpoint from 'hooks/useBreakpoint'
import { ContainerWrapper } from 'pages/Creator/StyledCreate'
import Image from 'components/Image'
import { useHistory } from 'react-router-dom'
import { useDaoBaseInfo } from 'hooks/useDaoInfo'
import { routes } from 'constants/routes'
import tag from 'assets/images/tag.png'
import fans from 'assets/images/fans.png'
import comment from 'assets/images/comment.png'
import msg from 'assets/images/msg.png'
// const StyledBox = styled(Box)(({ theme }) => ({
//   padding: '28px 40px',
//   display: 'flex',
//   alignItems: 'center',
//   overflowX: 'auto',
//   border: `1px solid ${theme.bgColor.bg2}`,
//   boxShadow: theme.boxShadow.bs1,
//   borderRadius: theme.borderRadius.default,
//   '&::-webkit-scrollbar': {
//     display: 'none'
//   },
//   [theme.breakpoints.down('sm')]: {
//     display: 'grid',
//     gridGap: '15px',
//     padding: '20px',
//     gridTemplateColumns: '1fr 2fr',
//     alignItems: 'flex-start'
//   }
// }))

export function DaoItem({
  daoAddress,
  chainId,
  daoName,
  daoLogo,
  members,
  verified,
  activeProposals,
  proposals,
  joinSwitch
}: HomeListProp) {
  const history = useHistory()
  const daoBaseInfo = useDaoBaseInfo(daoAddress, chainId)
  console.log(verified, joinSwitch)

  return (
    <Box
      minWidth={281}
      height={218}
      sx={{
        width: '25%',
        padding: '16px 10px 10px',
        border: '1px solid #d4d7e2',
        borderRadius: '10px',
        marginRight: 10,
        cursor: 'pointer',
        '&:hover': {
          border: `2px solid #0049C6`
        },
        '&::-webkit-scrollbar': {
          display: 'none'
        },
        '& .des': {
          display: '-webkit-box',
          fontSize: 14,
          width: '247px',
          height: '76px',
          textAlign: 'left',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          WebkitBoxOrient: 'vertical',
          WebkitLineClamp: 3
        }
      }}
      onClick={() => {
        history.push(routes._DaoInfo + `/${chainId}/${daoAddress}/proposal`)
      }}
    >
      <Box display={'flex'} justifyContent={'flex-start'} flexDirection={'row'} alignItems={'center'} gap={10}>
        <Image src={daoLogo} width={48} height={48}></Image>
        <Box display={'flex'} flexDirection={'column'} justifyContent={'flex-start'}>
          <Box display={'flex'} flexDirection={'row'} alignItems={'center'} gap={10}>
            <p
              style={{
                fontSize: 20,
                margin: 0,
                fontWeight: 700,
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                overflow: 'hidden'
              }}
            >
              {daoName}
            </p>
            <Image src={tag} width={16}></Image>
          </Box>
          <div style={{ fontSize: 14, textAlign: 'left' }}>@{daoBaseInfo?.handle}</div>
        </Box>
      </Box>
      <Typography className="des">{daoBaseInfo?.description}</Typography>
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        sx={{
          marginTop: 26,
          '& .wrapper': {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
            '& img': {
              width: '30px',
              height: '30px'
            },
            '& p': {
              margin: 0
            }
          }
        }}
      >
        <Box className="wrapper">
          <Image src={fans} alt=""></Image>
          <p>{members}</p>
        </Box>
        <Box className="wrapper">
          <Image src={comment} alt=""></Image>
          <p>{proposals}</p>
        </Box>
        <Box className="wrapper">
          <Image src={msg} alt=""></Image>
          <p>{activeProposals}</p>
        </Box>
      </Box>
    </Box>
  )
}

export default function MyDaos({
  adminDao,
  memberDao
}: {
  adminDao: UserProfileDaoProp[] | undefined
  memberDao: UserProfileDaoProp[] | undefined
}) {
  // const theme = useTheme()
  const { result: homeDaoList } = useHomeDaoList()
  const isSmDown = useBreakpoint()
  if ((!adminDao || !adminDao.length) && (!memberDao || !memberDao.length)) {
    return null
  }
  return (
    <ContainerWrapper
      maxWidth={isSmDown ? '100%' : 1150}
      style={{ width: isSmDown ? '100%' : '100vw' }}
      margin={'0 auto'}
    >
      <Typography variant="h6" fontSize={16} fontWeight={600}>
        DAOs
      </Typography>
      {/* <StyledBox mt={25}>
        {adminDao && !!adminDao.length && (
          <Box>
            <Typography textAlign={isSmDown ? 'center' : undefined} mb={10} variant="h6" fontSize={14} fontWeight={500}>
              Admin
            </Typography>
            <Stack
              direction={'row'}
              mr={isSmDown ? 0 : 65}
              spacing={isSmDown ? 0 : 33}
              sx={{
                display: { xs: 'grid', sm: 'flex' },
                justifyItems: 'center'
              }}
            >
              {adminDao.map((item, index) => (
                <DaoBlock key={index} />
              ))}
            </Stack>
          </Box>
        )}

        {memberDao && !!memberDao.length && (
          <Box
            sx={{
              borderLeft: { xs: `1px solid ${theme.bgColor.bg2}`, sm: 'none' }
            }}
          >
            <Typography textAlign={isSmDown ? 'center' : undefined} mb={10} variant="h6" fontSize={14} fontWeight={500}>
              Member
            </Typography>
            <Stack
              direction={'row'}
              spacing={isSmDown ? 0 : 33}
              sx={{
                display: { xs: 'grid', sm: 'flex' },
                gridTemplateColumns: '1fr 1fr',
                justifyItems: { xs: 'center', sm: undefined }
              }}
            >
              {memberDao.map((item, index) => (
                <DaoBlock key={index} />
              ))}
            </Stack>
          </Box>
        )}
      </StyledBox> */}
      <Box
        mt={20}
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          flexDirection: 'row',
          overflowX: 'scroll',
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        }}
      >
        {homeDaoList?.map(item => (
          <DaoItem {...item} key={item.chainId} />
        ))}
      </Box>
    </ContainerWrapper>
  )
}
