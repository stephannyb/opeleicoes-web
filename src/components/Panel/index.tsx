import React from 'react';
import { CardContent, CardPanel, TextCard } from './styles';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function Panel({
  show,
  nome,
  contato,
  cidade,
  ocorrencia,
}: any) {
  return (
    <>
      <CardPanel onClick={show}>
        <CardContent>
          <>
            <TextCard>{nome}</TextCard>
            <TextCard>{contato}</TextCard>
            <TextCard>{cidade}</TextCard>
            <TextCard>{ocorrencia}</TextCard>
          </>
        </CardContent>
      </CardPanel>
    </>
  );
}
