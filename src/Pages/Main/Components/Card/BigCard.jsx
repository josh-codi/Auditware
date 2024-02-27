import React from "react";
import styled from "styled-components";
import Forward from '../../../Auth/assets/images/Forward.svg'
import { avatar } from "../../../../Assets";


function BigCard(){
    const members = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    const[collapse,setColl]=React.useState({Columns:false})
    return(
        <Container>
            <Columns>
                <aside>Recent Projects</aside>
                <Pointer
                >See all <img height='10px' src={Forward}/>
                </Pointer>
            </Columns>
            <Columns>
                <aside>2024 First Quater Financial Audit</aside> <Vr></Vr>
                <aside>DSR Audit Tax Consultancy</aside> 
                <aside></aside>
                {
                    members.map((mem, idx) => {
                        if (idx < 3) {
                        return (
                            <div key={`mem-${idx}`} className="profileImg rounded-full overflow-hidden bg-gray-300 shadow">
                            <img src={avatar} alt="" className='' />
                            </div>
                        );
                        }
                        return <React.Fragment key={`mem-${idx}`} />;
                    })
                }

            </Columns>
            <Columns>
                <aside>January Annual Audit</aside> <Vr></Vr>
                <aside>Delorem Ghana Limited</aside> 
                <aside></aside>
                {
                        members.map((mem, idx)=>{
                            if(idx<2){
                                return <div key={'mem-2-'+idx} className="profileImg rounded-full overflow-hidden bg-gray-300 shadow">
                                        <img  src={avatar} alt="" className=''/>
                                    </div>
                            }
                            return <React.Fragment key={`mem-2-${idx}`} />;
                        })
                    }
            </Columns>

            <Columns>
                <aside>May 2023 Audit</aside> <Vr></Vr>
                <aside>Elite IT Consultancy</aside> 
                <aside></aside>
                {
                        members.map((mem, idx)=>{
                            if(idx<3){
                                return <div key={'mem-3-'+idx} className="profileImg rounded-full overflow-hidden bg-gray-300 shadow">
                                        <img  src={avatar} alt="" className=''/>
                                    </div>
                            }
                            return <React.Fragment key={`mem-3-${idx}`} />;
                        })
                    }
            </Columns>
            <Columns>
                <aside>2022 End of Year Audit</aside> <Vr></Vr>
                <aside>Ipsum Farms Ghana</aside> 
                <aside></aside>
                {
                        members.map((mem, idx)=>{
                            if(idx<3){
                                return <div key={'mem-4-'+idx} className="profileImg rounded-full overflow-hidden bg-gray-300 shadow">
                                        <img  src={avatar} alt="" className=''/>
                                    </div>
                            }
                            return <React.Fragment key={`mem-4-${idx}`} />;
                        })
                    }
            </Columns>

        </Container>
    )


}
const Container = styled.div`
margin: 0 2rem 0 0;
width: 800px;
height: fit-content;
border: 1px solid #02474335;
padding: 0.8rem;
display: flex;
flex-direction: column;
border-radius: 15px;
text-align: left;
cursor: pointer;
color: gray;

`
;

const Vr = styled.div`
border: 1px solid #02474335;
    height: 14px;

`;
const Columns =styled.div`
    display:flex;
    justify-content:space-between;
    margin:1rem 0 1rem 0;


    .profileImg{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        overflow: hidden;
        margin-right: 0px;
        border: 1px solid #0A9C93;
        
        

        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }




    `





;
export const Pointer = styled.div`
    display:flex;
    align-items:center;
    margin:0 0 0 4rem;

`;
export default BigCard