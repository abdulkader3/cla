import React from 'react'

const About = () => {
  return (
    <>
    <div className="container flex justify-center mt-[100px]  ">
      <div className=" w-[1300px] h-[800px] bg-white rounded-[20px] flex flex-col ">
        <div className="flex flex items-center gap-[50px] pl-[50px] pt-10  ">
        <h1 className=' text-[40px] font-roboto font-bold ' >About Me</h1>
        <div className=" w-[200px] h-[3px] bg-gradient-to-r from-[#FA5252] to-[#DD2476] "></div>
        </div>


        <div className="flex  ">
          <div className=" w-[250px] overflow-hidden rounded-[10px] mt-[30px] ml-[50px] ">
            <img src="photos/IMG_0883.JPG" alt="me" />
          </div>
          <div className=" text-[#44566c] ">
            <div className="w-[750px] text-start mt-[30px] ml-[40px] ">
              <h2 className=' text-[26px] mb-[11px] font-poppins font-medium ' >who am i ?</h2>
              <p className=' text-[16px] font-poppins text-start font-normal ' >I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive </p>
              <p className=' text-[16px] font-poppins text-start font-normal ' >designs.</p>
              <p className=' text-[16px] font-poppins text-start font-normal pt-[11px] '  >My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.</p>
            </div>
            <div className="">
              <div className=" ml-[40px] mt-[30px] ">
              <h2 className=' text-[26px] pb-[11px] font-poppins font-medium ' >Personal info</h2>
              </div>
              
              <div className=" flex flex-wrap justify-between  ">




                <div className=" gap-5 flex flex-col ">
                  

                
              <div className="flex items-center ml-[40px] gap-3 ">
                    <div className=" w-[50px] h-[50px] rounded-[10px] bg-white shadow flex justify-center items-center ">
                    <img className=' w-[22px] h-[22px] ' src="photos/mobile-phone.png" alt="mobile" />
                    </div>
                    <div className="">
                      <p className='text-[12px] font-normal ' >phone</p>
                      <p className=' font-poppins text-[16px] font-normal ' > +88 01970713237</p>
                    </div>
                  </div>
                    

                     <div className="flex items-center ml-[40px] gap-3  ">
                    <div className=" w-[50px] h-[50px] rounded-[10px] bg-white shadow flex justify-center items-center ">
                    <img className=' w-[22px] h-[22px] ' src="photos/mobile-phone.png" alt="mobile" />
                    </div>
                    <div className="">
                      <p className='text-[12px] font-normal ' >Location</p>
                      <p className=' font-poppins text-[16px] font-normal ' > Bhangladesh, Dhaka </p>
                    </div>
                  </div>
                 




                </div>


               <div className="gap-5 flex flex-col">
                
               <div className="flex items-center  gap-3 ">
                    <div className=" w-[50px] h-[50px] rounded-[10px] bg-white shadow flex justify-center items-center ">
                    <img className=' w-[22px] h-[22px] ' src="photos/email.png" alt="mobile" />
                    </div>
                    <div className="">
                      <p className='text-[12px] font-normal ' >Email</p>
                      <p className=' font-poppins text-[16px] font-normal ' > abdulkader.wabdeveloper@gmail.com </p>
                    </div>
                  </div>





                  <div className="flex items-center   gap-3 ">
                    <div className=" w-[50px] h-[50px] rounded-[10px] bg-white shadow flex justify-center items-center ">
                    <img className=' w-[22px] h-[22px] ' src="photos/mobile-phone.png" alt="mobile" />
                    </div>
                    <div className="">
                      <p className='text-[12px] font-normal ' >Birthday</p>
                      <p className=' font-poppins text-[16px] font-normal ' > july 17, 2007 </p>
                    </div>
                  </div>
               </div>
                  
               








                  









              </div>
                
            </div>
                      




          </div>
        </div>







      </div>
    </div>
      
    </>
  )
}

export default About
