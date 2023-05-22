import { ReactNode } from 'react';

type InfoProps = {
  children: ReactNode
}

const Info: React.FC<InfoProps> = ({ children }) => {
  return (
    <> 
      {children}
    </>
  )
};

export default Info;