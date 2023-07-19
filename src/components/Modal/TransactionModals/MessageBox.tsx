import React from 'react'
import { Box, Typography } from '@mui/material'
import Modal from 'components/Modal'
import { ReactComponent as SuccessIcon } from 'assets/componentsIcon/statusIcon/success_icon.svg'
import { ReactComponent as FailureIcon } from 'assets/componentsIcon/statusIcon/failure_icon.svg'
import { ReactComponent as SupportIcon } from 'assets/componentsIcon/statusIcon/support_icon.svg'
import { ReactComponent as Error } from 'assets/componentsIcon/statusIcon/error_icon.svg'
import { ReactComponent as Warning } from 'assets/componentsIcon/statusIcon/warning_icon.svg'
import Button from 'components/Button/Button'
import useModal from 'hooks/useModal'

interface Props {
  type: 'success' | 'failure' | 'support' | 'error' | 'warning'
  children?: React.ReactNode
  width?: string
  header?: string
  action?: () => void
  actionText?: string
  BackdropClick?: boolean
  hideFunc?: () => void
}

export default function MessageBox({
  BackdropClick,
  type,
  children,
  width = '480px',
  header,
  action,
  actionText,
  hideFunc
}: Props) {
  const { hideModal } = useModal()

  const icon =
    type === 'success' ? (
      <SuccessIcon height={40} width={40} />
    ) : type === 'failure' ? (
      <FailureIcon />
    ) : type === 'support' ? (
      <SupportIcon />
    ) : type === 'warning' ? (
      <Warning />
    ) : (
      <Error />
    )

  return (
    <Modal width={width} BackdropClick={BackdropClick}>
      <Box display={'grid'} alignItems={'center'} padding={'40px'} justifyItems="center" gap="20px">
        <Box>{icon}</Box>
        {header && <Typography variant="h6">{header}</Typography>}
        <Box
          fontSize="18px"
          sx={{
            wordBreak: 'break-word'
          }}
          textAlign="center"
          display="grid"
          justifyItems="center"
          width="100%"
        >
          {children}
        </Box>

        <Box display="flex" justifyContent="space-around" width="100%" marginTop="10px">
          <Button
            onClick={() => {
              hideModal()
              hideFunc && hideFunc()
            }}
          >
            Close
          </Button>
          {type === 'failure' && actionText && <Button onClick={action}>{actionText}</Button>}
        </Box>
      </Box>
    </Modal>
  )
}
