import {
  Box,
  Typography,
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  tableCellClasses,
  MenuItem
} from '@mui/material'
import useBreakpoint from 'hooks/useBreakpoint'
import { ReactComponent as AddIcon } from 'assets/svg/newIcon.svg'
import { useCallback } from 'react'
import useModal from 'hooks/useModal'
import AddJobsModal from './Modals/AddJobsModal'
import JobDetailModal from './Modals/JobDetailModal'
import AddMemberModal from './Modals/AddMemberModal'
import EditIcon from 'assets/images/editIcon.png'
import DetailIcon from 'assets/images/expendIcon.png'
import Image from 'components/Image'
// import Table from 'components/Table'
import avatar from 'assets/images/avatar.png'
import Select from 'components/Select/Select'

const TopText = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
})

const jobList = [
  { title: 'Contract developer（Core）', requirements: ['job requirement', 'work content', 'benefits'] },
  { title: 'Contract developer（Core）', requirements: ['job requirement', 'work content', 'benefits'] },
  { title: 'Contract developer（Core）', requirements: ['job requirement', 'work content', 'benefits'] }
]

// const memberList = [
//   {
//     address: '0x5ef8651589B8F672C4D2bC1543840725D61Eb846',
//     logo: '',
//     name: 'Allen',
//     chainId: 97
//   },
//   {
//     address: '0x5ef8651589B8F672C4D2bC1543840725D61Eb846',
//     logo: '',
//     name: 'Lay',
//     chainId: 97
//   },
//   {
//     address: '0x5ef8651589B8F672C4D2bC1543840725D61Eb846',
//     logo: '',
//     name: 'Jorden',
//     chainId: 97
//   }
// ]

export default function Team() {
  const isSmDown = useBreakpoint('sm')
  const { showModal, hideModal } = useModal()

  const createNewJob = useCallback(() => {}, [])
  const createNewMember = useCallback(() => {}, [])

  const addMemberCB = useCallback(() => {
    showModal(<AddMemberModal onClose={hideModal} onClick={createNewMember} />)
  }, [createNewMember, hideModal, showModal])
  const addJobsCB = useCallback(() => {
    showModal(<AddJobsModal onClose={hideModal} onClick={createNewJob} />)
  }, [createNewJob, hideModal, showModal])

  // const tableList = useMemo(() => {
  //   return memberList.map(({ address, chainId, name, logo }) => [
  //     <Box key={address + chainId} display={'flex'} alignItems={'center'} gap={10}>
  //       <Image width={18} height={18} src={logo || avatar} />
  //       <Typography color={'#3F5170'} fontWeight={500} fontSize={14}>
  //         {name}
  //       </Typography>
  //     </Box>,
  //     <Box key={address + chainId} display={'flex'}>
  //       <Typography>{address}</Typography>
  //     </Box>,
  //     <Box key={address + chainId} display={'flex'}></Box>
  //   ])
  // }, [])

  return (
    <Box sx={{ padding: isSmDown ? '20px 16px' : undefined }}>
      <TopText>
        <Typography fontSize={14} color={'#80829F'} fontWeight={500} lineHeight={'16px'}>
          Jobs
        </Typography>
        <Box display={'flex'} gap={35} flexDirection={'row'}>
          <BlueButton actionText="Add Members" onClick={addMemberCB} />
          <BlueButton actionText="Add Jobs" onClick={addJobsCB} />
        </Box>
      </TopText>
      <Box
        mt={14}
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: 15
        }}
      >
        {jobList.map((item, index) => (
          <JobCard key={item.title + index} {...item} />
        ))}
      </Box>
      {/* <Table firstAlign="left" variant="outlined" header={['Member', 'Address', 'Guests']} rows={tableList}></Table> */}
      <Box sx={{ mt: 30 }}>
        <Tablee />
      </Box>
    </Box>
  )
}

export function BlueButton({
  actionText,
  onClick,
  disabled = false
}: {
  actionText: string
  onClick: () => void
  disabled?: boolean
}) {
  return (
    <Box
      onClick={onClick}
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        cursor: 'pointer',
        '& p': {
          color: disabled ? '#b5b7cf' : '#97B7EF',
          fontSize: 14,
          lineHeight: '20px',
          fontFamily: 'Inter'
        }
      }}
    >
      <AddIcon />
      <Typography>{actionText}</Typography>
    </Box>
  )
}

function JobCard({ title, requirements }: { title: string; requirements: string[] }) {
  const { showModal } = useModal()
  const editIconClick = useCallback(() => {}, [])
  const detailIconClick = useCallback(() => {
    showModal(<JobDetailModal title={title} requirements={requirements} />)
  }, [requirements, showModal, title])
  return (
    <Box
      sx={{
        display: 'flex',
        width: 463,
        height: 162,
        border: '1px solid #D4D7E2',
        borderRadius: '8px',
        padding: '20px 24px',
        flexDirection: 'column',
        '& p': {
          color: '#3F5170',
          lineHeight: 1
        }
      }}
    >
      <Box flexDirection={'row'} alignItems={'center'} display={'flex'} justifyContent={'space-between'}>
        <Typography fontSize={16} fontWeight={700}>
          {title}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: 16,
            alignItems: 'center',
            '& img': {
              cursor: 'pointer'
            }
          }}
        >
          <Image width={16} src={EditIcon} onClick={editIconClick} />
          <div style={{ height: 13.5, width: 1, backgroundColor: '#D4D7E2' }}></div>
          <Image width={16} height={16} src={DetailIcon} onClick={detailIconClick} />
        </Box>
      </Box>
      <Box
        mt={20}
        height={80}
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'column'
        }}
      >
        {requirements.map((item, index) => (
          <Typography key={item + index} fontWeight={500} fontSize={16}>
            {index + 1}.{item}
          </Typography>
        ))}
      </Box>
    </Box>
  )
}

function Tablee() {
  const StyledTableCell = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`]: {
      padding: 0,
      paddingLeft: 20,
      height: '31px',
      backgroundColor: '#F8FBFF',
      fontFamily: 'Inter',
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '20px',
      color: '#3F5170',
      border: 'none',
      borderLeft: '1px solid #D4D7E2'
    },
    [`&.${tableCellClasses.head}.firstColumn`]: {
      borderLeft: 'none'
    },
    [`&.${tableCellClasses.body}`]: {
      padding: '0px 20px',
      height: '50px',
      fontFamily: 'Inter',
      fontWeight: 500,
      fontSize: '14px',
      lineHeight: '20px',
      color: '#3F5170'
    }
  }))

  const StyledTableRow = styled(TableRow)(() => ({
    '& td': {
      borderTop: '1px solid #D4D7E2',
      borderLeft: '1px solid #D4D7E2'
    },
    '& td:first-of-type': {
      borderLeft: 'none'
    },
    '&:last-child td': {
      borderBottom: 'none'
    }
  }))

  const memberList = [
    {
      address: '0x5ef8651589B8F672C4D2bC1543840725D61Eb846',
      logo: '',
      name: 'Allen',
      teamspaces: 1,
      chainId: 97
    },
    {
      address: '0x5ef8651589B8F672C4D2bC1543840725D61Eb846',
      logo: '',
      teamspaces: 1,
      name: 'Lay',
      chainId: 97
    },
    {
      address: '0x5ef8651589B8F672C4D2bC1543840725D61Eb846',
      logo: '',
      name: 'Jorden',
      Guests: 'Member',
      teamspaces: 1,
      chainId: 97
    }
  ]

  return (
    <TableContainer sx={{ border: '1px solid #D4D7E2', borderRadius: '8px' }}>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell className="firstColumn">Member</StyledTableCell>
            <StyledTableCell>Address</StyledTableCell>
            <StyledTableCell>Teamspaces</StyledTableCell>
            <StyledTableCell>Guests</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {memberList.map((row, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell>
                <Typography style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <Image width={18} height={18} src={avatar} />
                  {row.name}
                </Typography>
              </StyledTableCell>
              <StyledTableCell>{row.address}</StyledTableCell>
              <StyledTableCell>
                <Typography style={{ display: 'flex', justifyContent: 'space-between' }}>{row.teamspaces}</Typography>
              </StyledTableCell>
              <StyledTableCell>
                <Select
                  noBold
                  placeholder=""
                  style={{ fontWeight: 500, fontSize: 14, border: 'none' }}
                  height={40}
                  value={row.Guests}
                  // onChange={e => setCurrentProposalStatus(e.target.value)}
                >
                  <MenuItem sx={{ fontWeight: 500, fontSize: '14px !important', color: '#3F5170' }} value={row.Guests}>
                    Member
                  </MenuItem>
                </Select>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
