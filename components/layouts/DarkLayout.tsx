import { FC } from "react";



const DarkLayout: FC = ({children}) => {
  return (
    <div style={{
        backgroundColor: 'rgba(0,0,0,0.3)',
        borderRadius: '5px',
        padding: '10px',
    }}>
        <h3>DarkLayout</h3>
        {children}
    </div>  
  );
};

export default DarkLayout