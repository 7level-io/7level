import React from "react"
import ContactFile from "../assets/contacts/alvixe.vcf"

const AddContact = () => {
  return (
    <a href={ContactFile} download className="icon-item dark-bg one-row-item">
      <i className="fa fa-user-plus"></i>{" "}
    </a>
  )
}

export default AddContact
