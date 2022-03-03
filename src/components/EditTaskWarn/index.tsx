import React from 'react'

import { FiX } from 'react-icons/fi'

import * as S from './styles'

interface EditTaskWarnProps {
  handleClickCancelEdit: () => void
}

const EditTaskWarn: React.FC<EditTaskWarnProps> = ({
  handleClickCancelEdit
}) => {
  return (
    <S.Wrapper>
      <S.ButtonCloseWarn onClick={handleClickCancelEdit}>
        <FiX size={30} color="#FF3636" />
      </S.ButtonCloseWarn>
      <S.MessageWarn>Você está editando uma tarefa!</S.MessageWarn>
    </S.Wrapper>
  )
}

export default EditTaskWarn
