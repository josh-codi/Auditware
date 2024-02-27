import React from 'react'
import Wrapper from '../Components/Wrapper'
import styled from 'styled-components'
import { avatar } from '../../../Assets'
import { colors } from '../../../Setup/colors'
import { GridContent, InputContent } from '../StyledComponents'
import Card from '../Components/Card/Card'

function Profile() {
  const data = [1,1,1,1]
  return (
    <Wrapper page={'Profiles'} content={<>

        <SectionOne className='flex'>
          <div className="left flex v-flex a-i-s">
            <section className="flex">
              <aside className="profileImageContainer">
                <div className="profileImage">
                  <img src={avatar} alt="" className='img-fit'/>
                </div>
              </aside>
              <div className="flex v-flex a-i-s ml-1">
                <h3 className='username'>Michael Sakyi Yeboah</h3>
                <small className='role'>Administrator</small>
              </div>
            </section>
            <br />
            <InputContent>
              <p>Name</p>
              <input type="text" defaultValue={'Michal Sakyi Yeboah'}/>
            </InputContent>
            <InputContent>
              <p>Email</p>
              <input type="text" defaultValue={'msakyiyeboah@mail.com'}/>
            </InputContent>
            <InputContent>
              <p>Role</p>
              <input type="text" defaultValue={'Adminstrator'}/>
            </InputContent>
          </div>
          <div className="lineDivider"></div>
          <div className='right flex v-flex a-i-s j-c-s'>
            <div>Workspaces<small>(4 workspaces)</small></div>
            <br />
            <div className='mb-1 lst'>DSR Audit Tax Consultancy</div>
            <div className='mb-1 lst'>DSR Audit Tax Consultancy</div>
            <div className='mb-1 lst'>DSR Audit Tax Consultancy</div>
            <div className='mb-1 lst'>DSR Audit Tax Consultancy</div>
          </div>
        </SectionOne>


        <SectionTwo className='flex v-flex a-i-s mt-1'>
          <div className='title'>Projects</div>
          <br />
          <GridContent>
            {
              data.map((data, idx)=><Card key={`prject+${idx}`}/>)
            }
          </GridContent>
        </SectionTwo>
    </>}/>
  )
}

const SectionOne = styled.div`
  width: 100%;
  align-items: flex-start;
  padding-bottom: 3rem;
  border-bottom: 1px solid rgb(0,0,0,.1);

  @media only screen and (max-width: 777px){
    flex-direction: column;

    .right{
      margin-top: 1rem;
      width: 100%;
    }
  }

  .left{
    width: 500px;
    align-items: flex-start;

    @media only screen and (max-width: 777px){
      width: 100%;
    }
  }

  .right{
    justify-content: flex-start;
    align-items: flex-start;
    height: fit-content;

    .lst{
      color: gray;
    }
  }

  .username{
    font-size: 1.2rem;
    font-weight: 500;
    color: #555555
  }
  .role{
    color: gray;
  }

  .profileImageContainer{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    padding: 2px;
    overflow: hidden;
    background: linear-gradient(-45deg, #ffff6c, #5eff5e, #69d9ff);
    
    .profileImage{
      width: 100%;
      height: 100%;
      border-radius: 50%;
      overflow: hidden;
    }
  }

  .lineDivider{
    border: 1px solid rgb(0,0,0,.1);
    height: 400px;
    margin: 0 5rem;

    @media only screen and (max-width: 899px){
      margin: 0 2rem;
    }
    @media only screen and (max-width: 777px){
      display: none;
    }
  }

`

const SectionTwo = styled.div`
  
  .title{
    font-size: 1.2rem;
    font-weight: 500;
  }
`

export default Profile