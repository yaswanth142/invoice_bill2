import React from "react";
function App() {
  return (
    <div>
      <div className="border-black border-solid border-4 m-12 ">
        {/* This is section1 Starts */}
        <div className="section1">
          <div className="mt-8 ml-20">
            <span className="ml-48 font-bold">TM</span>
            <div className="bg-black h-18 text-3xl ml-6 p-4 text-center text-white w-48">TRINP</div>
            <span className="ml-16">PrintingThoughts</span>
            <div className="bg-black h-32 -mt-32 w-1 ml-96"></div>
          </div>
          <div className="float-right text-4xl mr-48 -mt-32 font-bold">
            Printfox Impressions Private Limited
            <br />
            <span className="text-xl font-normal">
              Address : Bannerughatta Road, Bengaluru, Karnataka - 560 076.
            </span>
            <br />
            <span className="text-xl font-normal">
              E-Mail : trinpprint@gmail.com , PhONE : +91 99 00 424019
            </span>
          </div>
        </div>
        {/* This is section1 End */}

        <div className="bg-black h-1 mt-4 "></div>

        {/* section2 starts */}

        <div>
          <div className="float-left mt-8 ml-8">
            Inv. No. : <b>TRINP048</b>
          </div>
          <center>
            <div className=" mt-4 underline font-bold">TAX_INVOICE</div>
            <span className="span4">
              (Issued United Section 31 of GST Act, 2017)
            </span>
          </center>
          <div className="float-right mr-8 -mt-4">Date: 24 11 2022</div>
        </div>

        <div className="bg-black h-1 mt-4"></div>

        {/* section2 ends */}

        {/* section 3 starts */}
        <div>
          <div className="float-left m-8">
            <span className="span5">Customer Name & Address</span>
            <br />
            <span className="font-bold text-xl">M/s Sai Sparsh Hospitals</span>
            <br />
            <span className="span5">#408, Hosur Road, Garvebhavi palya,</span>
            <br />
            <span className="span5">Bengaluru, PIN : 560 068.</span>
          </div>
          <div className="float-right mr-8 mt-20 font-bold">
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
        <div className="float-right mr-32 -mt-32 p-2 text-center font-bold">
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
          <div className="m-8 font-bold">
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

          <div className="m-8 font-bold">
            <span className="span7">
              CIN : U2220KA2021PTC145375 | PIN : AALCP8652P |{" "}
            </span>
            <br />
            <span className="span7">
              TAN : BLRP26513E | GSTIN : 29AALCP8652P1ZB |
            </span>
          </div>
          <div className="float-right mr-56 -mt-48">
            <img
              className="h-40 w-40"
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
