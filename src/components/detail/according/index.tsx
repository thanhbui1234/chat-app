
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import { GoSignOut } from "react-icons/go";
import DraggableDialog from '../../UI/confirmDialog';
import { useState } from 'react';

const According = () => {
  const [open,setOpen] = useState(false)
  return (
    <div className=''>
    <Accordion sx={{ p: 0, background:'none',color:'white' ,height:'20'}}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        Accordion 1
      </AccordionSummary>
      <AccordionDetails>
        Lorem ipsum dolor sit amet, consect
      </AccordionDetails>
    </Accordion>
    <Accordion sx={{ p: 0, background:'none',color:'white' ,height:'20'}}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2-content"
        id="panel2-header"
      >
        Accordion 2
      </AccordionSummary>
      <AccordionDetails>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.
      </AccordionDetails>
    </Accordion>
    <Accordion sx={{ p: 0, background:'none',color:'white' ,height:'20',border:'none'}}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel3-content"
        id="panel3-header"
      >
        Accordion Actions
      </AccordionSummary>
      <AccordionDetails>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.
      </AccordionDetails>
      <AccordionActions>
        <Button>Cancel</Button>
        <Button>Agree</Button>
      </AccordionActions>
    </Accordion>
    <Accordion sx={{ p: 0, background:'none',color:'white' ,height:'20',border:'none'}}>
      <AccordionDetails>
      <GoSignOut onClick={()=>setOpen(true)} className='cursor-pointer' />
      </AccordionDetails>
    </Accordion>
    <DraggableDialog open={open} setOpen={setOpen}></DraggableDialog>
  </div>
  )
}

export default According