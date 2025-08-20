import {ReduxProvider} from '@/redux/provider';
import Counter from '@/components/counterComponent'
import { Divider } from '@mui/material';
import Counter2 from '@/components/counterComponent2';

export default function CounterPage(){
    return (
        <>
        <ReduxProvider>
            <Counter />
        </ReduxProvider>
       <Divider/>
       <Counter2/>
        <Divider/>
        
        </>   
    )
}