import React from 'react'
import { IoIosClose } from 'react-icons/io'
import { IoDocument } from 'react-icons/io5';
import { FaTrash } from 'react-icons/fa';
const InboxUserInfor = () => {
  return (
    <>
      <div className='userinfor w-25 pt-5 mt-2 px-1'>
        <div className="userinfor-td d-flex justify-content-between">
            <h2>User Infor</h2>
            <IoIosClose className='fz-10'/>
        </div>
        <div className="userinfor-infors">
            <img src="logo192.png" alt="" />
            <div className="userinfor-ndc">
                <h3 className='py-3'>Alexandra Michu</h3>
                <p className=''>UX Researcher</p>

            </div>
        </div>
        <div className="user-infor-nhom">
            <p>Hiphonic Team</p>
        </div>

        <div className="shared-file">
             <h3>Shared Files</h3>
             <div className="file-nd">
                <div className="dangfile">
                   <IoDocument />
                </div>
                <div className="nd-file">
                      <h3>Reference.zip</h3>
                      <p>2MB</p>
                </div>
                <div className="xoafile">
                    <FaTrash />
                </div>
             </div>
             <div className="file-nd">
                <div className="dangfile">
                   <IoDocument />
                </div>
                <div className="nd-file">
                      <h3>Reference.zip</h3>
                      <p>2MB</p>
                </div>
                <div className="xoafile">
                    <FaTrash />
                </div>
             </div>
             <div className="file-nd">
                <div className="dangfile">
                   <IoDocument />
                </div>
                <div className="nd-file">
                      <h3>Reference.zip</h3>
                      <p>2MB</p>
                </div>
                <div className="xoafile">
                    <FaTrash />
                </div>
             </div>
        </div>
        <div className="shared-file">
             <h3>Shared links</h3>
             <div className="file-nd">
                <div className="dangfile">
                   <IoDocument />
                </div>
                <div className="nd-file">
                      <h3>Reference.zip</h3>
                      <p>2MB</p>
                </div>
                <div className="xoafile">
                    <FaTrash />
                </div>
             </div>
             <div className="file-nd">
                <div className="dangfile">
                   <IoDocument />
                </div>
                <div className="nd-file">
                      <h3>Reference.zip</h3>
                      <p>2MB</p>
                </div>
                <div className="xoafile">
                    <FaTrash />
                </div>
             </div>
             <div className="file-nd">
                <div className="dangfile">
                   <IoDocument />
                </div>
                <div className="nd-file">
                      <h3>Reference.zip</h3>
                      <p>2MB</p>
                </div>
                <div className="xoafile">
                    <FaTrash />
                </div>
             </div>
        </div>
      </div>
    </>
  )
}

export default InboxUserInfor
