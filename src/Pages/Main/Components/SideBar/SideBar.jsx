import React, { useContext } from 'react'
import styled from 'styled-components'
import { avatar, brand } from '../../../../Assets'
import {home} from '../../../../Assets/Icons/index'
import NavItem from './NavItem'
import session from '../../../../Store/Session'
import Context from '../../../../Store/Context/Context'
import actions from '../../../../Store/Context/Actions'

function SideBar({onlyIcons}) {
  const {setStore} = useContext(Context)
  const Logout = () => {
    if(window.confirm('Are you sure you want to logout? ')){
      setStore({type: actions.logout})
    }
  }

  return (
    <Container style={{minWidth: onlyIcons?'fit-content':'200px'}} className='flex v-flex a-i-c j-c-b'>
      <section className='flex v-flex a-i-c' style={{width: '100%'}}>
        <div className='brand-image flex'>
          {
            !onlyIcons ?
            <img src={brand} alt="" width={110}/> : 
            <svg width="34" height="22" viewBox="0 0 34 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.672 19.528C13.056 19.528 13.568 19.0907 14.208 18.216C14.848 17.32 15.4773 16.1787 16.096 14.792C16.736 13.384 17.12 12.68 17.248 12.68C17.3973 12.68 17.472 12.7653 17.472 12.936C17.472 13.5333 17.1627 14.4827 16.544 15.784C14.8587 19.368 13.4293 21.16 12.256 21.16C11.2747 21.16 10.5707 20.9893 10.144 20.648C9.952 20.456 9.856 18.4293 9.856 14.568L4.608 14.952C4.20267 16.0613 3.84 17.1707 3.52 18.28C3.2 19.3893 2.98667 20.072 2.88 20.328C2.64533 20.8827 2.08 21.16 1.184 21.16C0.586667 21.16 0.288 20.904 0.288 20.392C0.288 19.88 0.693333 19.1333 1.504 18.152C1.65333 17.96 2.144 16.9253 2.976 15.048C2.67733 15.0693 2.38933 15.08 2.112 15.08C1.36533 15.08 0.992 14.76 0.992 14.12C0.992 13.544 1.29067 13.256 1.888 13.256C1.93067 13.256 2.53867 13.3093 3.712 13.416C4.032 12.6693 4.37333 11.9333 4.736 11.208C7.53067 5.36267 9.45067 2.44 10.496 2.44C11.2853 2.44 11.8293 6.09867 12.128 13.416H12.416C12.5653 13.416 12.64 13.5227 12.64 13.736C12.64 13.9493 12.48 14.1307 12.16 14.28C12.288 17.7787 12.4587 19.528 12.672 19.528ZM5.088 13.576C7.584 13.576 9.17333 13.5653 9.856 13.544C9.83467 13.2027 9.81333 12.6053 9.792 11.752C9.77067 10.8987 9.74933 10.1627 9.728 9.544C9.70667 8.904 9.68533 8.24267 9.664 7.56C9.57867 6.088 9.45067 5.352 9.28 5.352C9.04533 5.352 8.56533 6.04533 7.84 7.432C7.11467 8.81867 6.54933 9.992 6.144 10.952C5.58933 12.3387 5.23733 13.2133 5.088 13.576ZM25.3433 2.472C25.4713 2.45067 25.8126 2.44 26.3673 2.44C26.9433 2.44 27.6259 2.54667 28.4153 2.76C29.2259 2.952 30.0046 3.28267 30.7513 3.752C31.5193 4.2 32.1273 4.872 32.5753 5.768C33.0446 6.64267 33.2793 7.688 33.2793 8.904C33.2793 10.9093 32.5006 12.5307 30.9433 13.768C29.3859 15.0053 27.3273 15.624 24.7673 15.624C24.7673 19.784 24.0313 21.864 22.5593 21.864C21.5779 21.864 21.0873 21.448 21.0873 20.616C21.0873 20.36 21.2153 20.008 21.4713 19.56C21.7273 19.112 21.9086 18.6 22.0153 18.024C22.1219 17.448 22.2073 16.52 22.2713 15.24C21.3966 14.9627 20.9593 14.5787 20.9593 14.088C20.9593 13.5973 21.1833 13.352 21.6313 13.352C21.8659 13.352 22.1006 13.384 22.3353 13.448C22.6126 7.752 22.8046 4.60533 22.9113 4.008C21.6953 4.30667 20.6819 4.79733 19.8713 5.48C19.0819 6.16267 18.6873 6.97333 18.6873 7.912C18.6873 8.44533 18.5699 8.86133 18.3353 9.16C18.1219 9.45867 17.8446 9.608 17.5033 9.608C16.8633 9.608 16.5433 9.24533 16.5433 8.52C16.5433 7.09067 17.1726 5.864 18.4313 4.84C19.7113 3.79467 21.3006 3.09067 23.1993 2.728C23.6046 1.36267 24.1699 0.679998 24.8953 0.679998C25.1939 0.679998 25.3433 1.27733 25.3433 2.472ZM30.8793 9.8C30.8793 7.88 30.3246 6.41867 29.2153 5.416C28.1273 4.392 26.8046 3.848 25.2473 3.784C24.9273 7.56 24.7673 11.112 24.7673 14.44C25.0659 14.4827 25.3006 14.504 25.4713 14.504C27.2633 14.504 28.6073 14.0453 29.5033 13.128C30.4206 12.2107 30.8793 11.1013 30.8793 9.8Z" fill="#024744"/>
            </svg>

          }
        </div>

        <NavItem onlyIcon={onlyIcons} link={'/dashboard'} content={<>
          <img src={home} alt="" />
          {
            !onlyIcons && 
            <small className='text'>Dashboard</small>
          }
        </>}/>
        <NavItem onlyIcon={onlyIcons} link={'/recents'} content={<>
          <svg width="19" height="19" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0C7.03 0 3 4.03 3 9H0L3.89 12.89L3.96 13.03L8 9H5C5 5.13 8.13 2 12 2C15.87 2 19 5.13 19 9C19 12.87 15.87 16 12 16C10.07 16 8.32 15.21 7.06 13.94L5.64 15.36C7.27 16.99 9.51 18 12 18C16.97 18 21 13.97 21 9C21 4.03 16.97 0 12 0ZM11 5V10L15.25 12.52L16.02 11.24L12.5 9.15V5H11Z" fill="#024744"/>
          </svg>
          {
            !onlyIcons &&
            <small className='text'>Recents</small>
          }
        </>}/>
        <NavItem onlyIcon={onlyIcons} link={'/analytics'} content={<>
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 9.64 2 7.4 3.42 5.52C3.67 5.19 4.14 5.13 4.47 5.38C4.8 5.63 4.87 6.1 4.62 6.43C3.4 8.04 2.75 9.97 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75C11.59 2.75 11.25 2.41 11.25 2C11.25 1.59 11.59 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75Z" fill="#024744"/>
          <path d="M12 19.75C7.73 19.75 4.25 16.27 4.25 12C4.25 11.59 4.59 11.25 5 11.25C5.41 11.25 5.75 11.59 5.75 12C5.75 15.45 8.55 18.25 12 18.25C15.45 18.25 18.25 15.45 18.25 12C18.25 8.55 15.45 5.75 12 5.75C11.59 5.75 11.25 5.41 11.25 5C11.25 4.59 11.59 4.25 12 4.25C16.27 4.25 19.75 7.73 19.75 12C19.75 16.27 16.27 19.75 12 19.75Z" fill="#024744"/>
          <path d="M12 16.75C11.59 16.75 11.25 16.41 11.25 16C11.25 15.59 11.59 15.25 12 15.25C13.79 15.25 15.25 13.79 15.25 12C15.25 10.21 13.79 8.75 12 8.75C11.59 8.75 11.25 8.41 11.25 8C11.25 7.59 11.59 7.25 12 7.25C14.62 7.25 16.75 9.38 16.75 12C16.75 14.62 14.62 16.75 12 16.75Z" fill="#024744"/>
          </svg>
          {
            !onlyIcons &&
            <small className='text'>Analytics</small>
          }
        </>}/>

        <hr style={{width: '100%', margin: '1rem 0'}}/>

        <NavItem onlyIcon={onlyIcons} link={'/workspaces'} content={<>
          <svg style={{width: '19'}} fill="none" strokeWidth={1.5} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
          </svg>
          {
            !onlyIcons &&
            <small className='text'>Workspaces</small>
          }
        </>}/>
        <NavItem onlyIcon={onlyIcons} link={'/projects'} content={<>
          <svg style={{width: '19'}} fill="none" strokeWidth={1.5} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
          </svg>
          {
            !onlyIcons &&
            <small className='text'>Projects</small>
          }
        </>}/>
        <NavItem onlyIcon={onlyIcons} link={'/members'} content={<>
          <svg style={{width: '19'}} fill="none" strokeWidth={1.5} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
          </svg>
          {
            !onlyIcons &&
            <small className='text'>Members</small>
          }
        </>}/>
        <NavItem onlyIcon={onlyIcons} link={'/files'} content={<>
          <svg style={{width: '19'}} fill="none" strokeWidth={1.5} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
          </svg>
          {
            !onlyIcons &&
            <small className='text'>Files</small>
          }
        </>}/>

        <hr style={{width: '100%', margin: '1rem 0'}}/>

        <NavItem onlyIcon={onlyIcons} link={'/profile'} content={<>
          <svg style={{width: '19'}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
          </svg>
          {
            !onlyIcons &&
            <small className='text'>Profile</small>
          }
        </>}/>
        <NavItem onlyIcon={onlyIcons} link={'/settings'} content={<>
          <img src={home} alt="" />
          {
            !onlyIcons && 
            <small className='text'>Settings</small>
          }
        </>}/>
      </section>

      <aside className="flex v-flex">
        <section className='flex j-c-c w-100' style={{width: '100%', marginBottom: '0.8rem'}}>
            <div className="profileImg rounded-full overflow-hidden bg-gray-300 shadow">
                <img src={avatar} alt="" className=''/>
            </div>
            {
              !onlyIcons && 
              <div className="profileContent flex v-flex">
                <b><small>Joshua Odame</small></b>
                <small className='role'>Admistrator</small>
              </div>
            }
        </section>
        
        <div onClick={()=>Logout()} className="flex" style={{width: '100%', color: 'red', background: 'rgb(239,68,68, .2)', padding: '0.5rem', borderRadius: '10px', cursor: 'pointer'}}>
            <svg style={{width: 20, marginRight: '0.3rem'}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
            </svg>
            <small>Logout</small>
        </div>
      </aside>
        
    </Container>
  )
}
const Container = styled.div`
    /* min-width: 200px; */
    height: 100%;
    background-color: #F8F8F8;
    overflow: hidden;
    overflow-y: auto;
    padding: 0rem 0.7rem;
    padding-bottom: 1rem;
    z-index: 10;

    .brand-image{
      min-height: 100px;
    }

    .profileImg{
      min-width: 40px;
      width: 40px;
      height: 40px;
      overflow: hidden;
      border-radius: 50%;

      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .profileContent{
      width: 100%;
      margin-left: 0.3rem;

      *{
        line-height: normal;
      }
      .role{
        color: gray;
      }
    }
`

export default SideBar