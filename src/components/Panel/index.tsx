import React, { useState } from 'react';
import Modal from 'react-modal';
import Button from '../Button';
import { CardContent, CardPanel, ModalContent, TextCard } from './styles';

// interface Perfil {
//   usuario_nome_guerra: string,
//   usuario_matricula: number,
//   usuario_cpf: number,
//   usuario_titulo: string
// }

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function Panel() {
  const [open, setOpen] = useState(false);

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  // useEffect(() => {
  //   loadUser()
  // }, [])

  // const [users, SetUsers] = useState<Perfil>()

  // const loadUser = async () => {
  //   try {
  //     const res = await axios.post(`https://rota.pm.rn.gov.br/api/usuario`, '',
  //       {
  //         headers: {
  //           'Authorization': 'Bearer ' + localStorage.getItem('auth_token')
  //         }
  //       })
  //     SetUsers(res.data.data)
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  function openModal() {
    setOpen(true);
  }

  return (
    <>
      <CardPanel onClick={openModal}>
        <CardContent>
          <>
            <TextCard>SD Tereza Brito</TextCard>
            <TextCard>Contato:</TextCard>
            <TextCard>Local:</TextCard>
            <TextCard>Ocorrência:</TextCard>
          </>
        </CardContent>
      </CardPanel>

      <Modal isOpen={open} style={customStyles}>
        <ModalContent>
          <Button>Validar</Button>
          <Button className="secondary">Invalidar</Button>
        </ModalContent>
      </Modal>
    </>
  );
}
