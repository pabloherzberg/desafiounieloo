
import React from 'react';
import styled from 'styled-components';

function Profile(props) {
    const imgUrl = props.prof.User.profileImg
    const description = props.prof.description
    const address = props.prof.addressName
    const addressLink = props.prof.addressLink
    const specialization = props.prof.Specialization.name
    const name = props.prof.User.name
    
      const Conteiner = styled.div`
        width:50vw;
        text-align:center;
      `
      const Specialization = styled.p`
        font-size:1.5em;
        text-align:center;
      `
      const PictureProfile = styled.img`
        max-width:80%;
        object-fit:contain;
        margin-left:50%;
        transform:translate(-50%);
      `
      const Name = styled.p`
        font-size:1em;
        text-align:center;
      `
      const Description = styled.p`
        font-size:1em;
        text-align:center;
        padding:10px;
      `
      const Adress = styled.p`
        font-size:1em;
        text-align:center;
        padding:10px;
      `
      const Map = styled.a`
      `
    return (
      <>
        {
          (specialization==props.type || props.type==null || props.type=='todos')?(
            <Conteiner>
              <Specialization>{specialization}</Specialization>
              <Name>{name}</Name>
              <PictureProfile src={imgUrl} className="Profile-picture"/>
              <Description>{description}</Description>
              <Adress>{address}</Adress>
              <Map href={addressLink}>Mapa</Map>
            </Conteiner>):(null)
        }
     </>
    );
  }
export default Profile;