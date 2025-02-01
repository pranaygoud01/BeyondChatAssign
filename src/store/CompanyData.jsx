import { createContext, useRef, useState } from 'react';


export const companyData = createContext({});

export const CompanyProvider = ({ children }) => {
  const inputname = useRef();
  const inputurl = useRef();
  const inputdes = useRef();
  

  const [companies, setCompanies] = useState([
    {
      name: "Google",
      url: "https://google.com",
      imgUrl: "https://logo.clearbit.com/google.com",
      status: "Scraped",
      des: "Google LLC is an American multinational corporation and technology company focusing on online advertising, search engine technology, cloud computing, computer software, quantum computing, e-commerce, consumer electronics, and artificial intelligence (AI).[9] It has been referred to as the most powerful company in the world by the BBC[10] and is one of the world's most valuable brands due to its market dominance, data collection, and technological advantages in the field of AI.[11][12][13] Alongside Amazon, Apple, Meta, Microsoft, Google's parent company, Alphabet Inc. is one of the five Big Tech companies."
    },
    {
      name: "Microsoft",
      url: "https://microsoft.com",
      imgUrl: "https://logo.clearbit.com/microsoft.com",
      status: "Scraped",
      des: "Microsoft Corporation is an American multinational technology conglomerate headquartered in Redmond, Washington.[2] Founded in 1975, the company became highly influential in the rise of personal computers through software like Windows, and the company has since expanded to Internet services, cloud computing, video gaming and other fields. Microsoft is the largest software maker, one of the most valuable public U.S. companies,[a] and one of the most valuable brands globally."
    },
    {
      name: "Accenture",
      url: "https://accenture.com",
      imgUrl: "https://logo.clearbit.com/accenture.com",
      status: "Pending",
      des: "Accenture plc is a global multinational professional services company originating in the United States and headquartered in Dublin, Ireland, that specializes in information technology (IT) services and management consulting. A Fortune Global 500 company, it reported revenues of $64.9 billion in 2024.[3]."
    },
   
    {
      name: "Apple",
      url: "https://apple.com",
      imgUrl: "https://logo.clearbit.com/apple.com",
      status: "Scraped",
      des: "Apple Inc. is an American multinational technology company that designs, manufactures, and markets consumer electronics, software, and online services. Known for its innovative products such as the iPhone, iPad, and Mac, Apple has set industry standards in design and quality while maintaining a strong brand reputation worldwide."
    },
    {
      name: "Amazon",
      url: "https://amazon.com",
      imgUrl: "https://logo.clearbit.com/amazon.com",
      status: "Pending",
      des: "Amazon.com, Inc. is an American multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence. Initially known for revolutionizing online shopping, Amazon has expanded its operations into various sectors and is considered one of the world's most influential and valuable companies."
    }
  ]);
  

  const submitForm = () => {
   
  
    const newCompany = {
      name: inputname.current.value,
      url: inputurl.current.value,
      imgUrl: `https://logo.clearbit.com/${inputurl.current.value}`,
      des: inputdes.current.value,
    };
  
    setCompanies((prevCompanies) => [...prevCompanies, newCompany]);
  
    inputname.current.value = '';
    inputurl.current.value = '';
    inputdes.current.value = '';
  
 
  };
  
  
  return (
    <companyData.Provider value={{ companies, setCompanies, submitForm, inputdes, inputname, inputurl }}>
      {children}
    </companyData.Provider>
  );
};
