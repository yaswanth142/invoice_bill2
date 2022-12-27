
import React,{useRef} from 'react';
import { FaPrint } from 'react-icons/fa';
import { useReactToPrint } from "react-to-print";
const App=()=>{
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });  
  return (
    
    <div>
      <button onClick={handlePrint} className="float-right m-1 display-flex bg-blue-100 w-5 h-5">  <FaPrint/> </button> 
      <div ref={componentRef} className="border-black border-solid border-4 m-12 ">
        {/* This is section1 Starts */}
        <div className="section1">
          <div className="xl:mt-8 xl:ml-28 sm:ml-2 sm:mt-4">
            <div className="xl:mt-16 sm:mt-16">
            <span className="xl:ml-48 font-bold sm:ml-20">TM</span>
            <div className="xl:bg-black xl:h-20 xl:text-3xl xl:ml-6 xl:p-4 xl:text-center xl:text-white xl:w-48
            sm:bg-black sm:h-8 sm:text-xl sm:ml-4 sm:text-center sm:text-white sm:w-24">TRINP</div>
            <span className="xl:ml-16 sm:ml-1">PrintingThoughts</span>
            </div>
            <div className="xl:bg-black xl:h-32 xl:-mt-32 xl:w-1 xl:mx-64
            sm:bg-black sm:h-32 sm:-mt-28 sm:w-1 sm:ml-32"></div>
          </div>
          <div className="xl:float-right xl:text-xl xl:mr-22 xl:-mt-32 xl:font-bold
          sm:float-right sm:text-xl sm:mr-2 sm:-mt-24 sm:font-bold">
            Printfox Impressions Private Limited
            <br />
            <span className="xl:text-xl xl:font-normal sm:text-sm sm:font-normal">
              Address : Bannerughatta Road, Bengaluru, Karnataka - 560 076.
            </span>
            <br />
            <span className="xl:text-xl xl:font-normal sm:text-sm sm:font-normal">
              E-Mail : trinpprint@gmail.com , PhONE : +91 99 00 424019
            </span>
          </div>
        </div>
        {/* This is section1 End */}

        <div className="xl:bg-black xl:h-1 xl:mt-4 sm:bg-black sm:h-1 sm:mt-2 "></div>

        {/* section2 starts */}

        <div>
          <div className="xl:float-left xl:mt-8 xl:ml-8 sm:float-left sm:mt-4 sm:ml-2">
            Inv. No. : <b>TRINP048</b>
          </div>
          <center>
            <div className="xl:mt-4 xl:mr-20 xl:underline xl:font-bold sm:mt-4 sm:underline sm:font-bold sm:mr-24">TAX_INVOICE</div>
            <span className="sm:text-sm sm:-ml-32">
              (Issued United Section 31 of GST Act, 2017)
            </span>
          </center>
          <div className="xl:float-right xl:mr-8 xl:-mt-4  sm:float-right sm:mr-4 sm:-mt-8">Date: 24 11 2022</div>
        </div>

        <div className="bg-black h-1 mt-4"></div>

        {/* section2 ends */}

        {/* section 3 starts */}
        <div>
          <div className="xl:float-left xl:m-8 sm:float-left sm:m-2">
            <span className="span5">Customer Name & Address</span>
            <br />
            <span className="xl:font-bold xl:text-xl sm:font-bold sm:text-xl">M/s Sai Sparsh Hospitals</span>
            <br />
            <span className="span5">#408, Hosur Road, Garvebhavi palya,</span>
            <br />
            <span className="span5">Bengaluru, PIN : 560 068.</span>
          </div>
          <div className="xl:float-right xl:mr-8 xl:mt-20 xl:font-bold sm:float-right sm:mr-2 sm:mt-20 sm:font-bold">
            <span className="span5">STATE CODE : 29 | </span>
            <br />
            <span className="span5">GSTIN : 29AAVFV8364R1ZK</span>
          </div>
        </div>
        {/* <div className='h2'></div> */}
        {/* section 3 ends */}

        {/* section 4 starts */}
        <div>
          <table>
            <thead>
              <tr>
                <th>SL NO.</th>
                <th>Material Description</th>
                <th>HSN Code</th>
                <th>UOM</th>
                <th>Qty</th>
                <th>Rate</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Leaflets</td>
                <td>4911</td>
                <td>EA</td>
                <td>12000</td>
                <td>₹ 1.33</td>
                <td>₹ 15,960.00</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Sign Boards (Name Plates)</td>
                <td>0000</td>
                <td>SFT</td>
                <td>32</td>
                <td>₹ 88.00</td>
                <td>₹ 2,816.00</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Double Side Gum Tapes</td>
                <td>0000</td>
                <td>EA</td>
                <td>02</td>
                <td>₹ 120.00</td>
                <td>₹ 240.00</td>
              </tr>
              <tr>
                <td>4</td>
                <td>UV Printed Vinyl Sticker</td>
                <td>7616</td>
                <td>SFT</td>
                <td>12</td>
                <td>₹ 75.00</td>
                <td>₹ 900.00</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* section 4 ends */}

        <div className="bg-black h-px mt-px"></div>
        <div className="bg-black h-px mt-px"></div>

        {/* section 5 starts */}
        <div>
          <table className="border-collapse h-32 font-bold">
            <tbody>
              <tr className="border-black border-solid border-2 text-center">
                <td>SUB TOTAL</td>
                <td>SGST @ 9%</td>
                <td>CGST @ 9%</td>
                <td>IGST @ 18%</td>
                <td>GRAND TOTAL</td>
              </tr>
              <tr className="border-black border-solid border-2 text-center">
                <td>₹ 19,916.00</td>
                <td>₹ 1,792.44</td>
                <td>₹ 1,792.44</td>
                <td>₹ 0.00</td>
                <td>₹ 23,500.88</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* section 5 ends */}

        {/* section 6 starts */}

        <div className="ve2"></div>
        <div className="xl:float-right xl:mr-1 xl:-mt-32 xl:p-2 xl:text-center xl:font-bold
        sm:float-right sm:mr-24 sm:-mt-32 sm:p-2 sm:text-center sm:mr-2 sm:font-bold">
          Authorised Signatory
          <br />
          <span>something</span>
          <br />
          <span>Sales Wing, South Zone</span>
          <br />
          Printfox Impressions Private Limited
        </div>
        <div className="bg-black h-px mt-px"></div>
        {/* section 6 starts */}

        {/* section 7 starts */}
        <div>
          <div className="xl:m-8 xl:font-bold sm:m-2 sm:m-2 sm:text-2px sm:font-bold">
            <span className="span7">Bank Account Details : </span>
            <br />
            <span className="span7">
              {" "}
              Account Name : Printfox Impressions Private Limited
            </span>
            <br />
            <span className="span7"> Account No. 40675768986</span>
            <br />
            <span className="span7">
              IFSC Code : SBIN0014951 | UPINID : trinp@sbi
            </span>
            <br />
            <span className="span7">Branch : Hulimavu Branch</span>
          </div>

          <div className="xl:m-8 xl:font-bold sm:m-2  sm:text-2px sm:font-bold">
            <span className="span7">
              CIN : U2220KA2021PTC145375 | PIN : AALCP8652P |{" "}
            </span>
            <br />
            <span className="span7">
              TAN : BLRP26513E | GSTIN : 29AALCP8652P1ZB |
            </span>
          </div>
          <div className="xl:float-right xl:mr-2 xl:-mt-48 sm:float-right sm:-mr-4 sm:-mt-44">
            <img
              className="h-40 w-40 "
              src="https://i.pinimg.com/originals/07/30/db/0730dbd6e1258eb216bfe4968672f783.png"
              alt="Logo"
            />
          </div>
        </div>
        {/* section 7 starts */}
      </div>
    </div>
  );
}

export default App;
