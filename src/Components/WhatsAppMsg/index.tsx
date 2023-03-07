import React,{useState} from 'react'
import './style.scss'
const WhatsMsg = () => {
  
    const [formData, setFormData] = useState({
      mobileNumber: "+923085153201",
      message: "",
    });
  
    const { mobileNumber, message } = formData;
  
    const onChange = (e:any) => {
      e.preventDefault();
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
    const onSubmit = (e:any) => {
        e.preventDefault();
      
          // Appending the phone number to the URL
          let url = `https://web.whatsapp.com/send?phone=${mobileNumber}`;
      
          // Appending the message to the URL by encoding it
          url += `&text=${encodeURI(message)}&app_absent=0`;
      
          // Open our newly created URL in a new tab to send the message
          window.open(url);
        
      };
  
    return (
      <div className="communication">
        <div className="whatsapp-card app">
          <div className="title flex_middle">
            
            <div><h4 className='text-success'>Send Message On WhatsApp</h4></div>
          </div>
          <div className="search_contact app">
            <input
          
            
              placeholder="Mobile Number"
              name="mobileNumber"
              value={mobileNumber}
              disabled
             className='whatsApp-input'
              required
            />
          </div>
          <div className="message app" style={{ marginTop: "1.5em" }}>
            <textarea
              placeholder="Hi! Send a message From Web WhatsApp...."
              name="message"
              value={message}
              onChange={onChange}
              className='whatsApp-textfeild'
              required
        
            />
          </div>
          <div  className='whatsApp-btn'>
            <button
              onClick={onSubmit}
              color="success" 
            >
              Send
            </button>
          </div>
        </div>
      </div>
    );
  };
  export default WhatsMsg