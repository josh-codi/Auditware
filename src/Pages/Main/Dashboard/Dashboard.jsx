import React, { useContext } from "react";
import { colors } from "../../../Setup/colors";
import styled from 'styled-components'
import Wrapper from "../Components/Wrapper";
import { GridContent } from "../StyledComponents";
import TextEditor from "../Components/TextEditor";
import Card from "../Components/Card/Card";
import BigCard from "../Components/Card/BigCard";
import SmallCard from "../Components/Card/smallCard";
import SmoothAreaChartComponent from "../Components/Charts/AreaChart";
import DoughnutChartComponent from "../Components/Charts/Doughnut";
import { Pointer } from "../Components/Card/BigCard";
import Forward from '../../Auth/assets/images/Forward.svg'
import Context from "../../../Store/Context/Context";





const Dashboard = () => {

    return (
      <Wrapper page={'Dashboard'} content={<>
        <MainContainer style={{color: colors.main}}>

          <TopPart>
            <BigCard />
            <SmallCard/>
          </TopPart>
          
          <ChartSection>
          <Labels>
            
              <aside>Quick Analytics</aside>
              <Pointer>
                See all <img height='10px' src={Forward}/>
              </Pointer>
            
          </Labels>

          <Charts>
          
          <aside className="areaChart">
            <SmoothAreaChartComponent/>
          </aside>
          <aside className="Doughnut">
            <DoughnutChartComponent/>
          </aside>
        </Charts>
          </ChartSection>
         
        </MainContainer>
      </>}/>
    );
  };
  
  const MainContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
  
    #name {
      border: 1px solid red;
  
      @media only screen and (max-width: 134px) {
      }
    }
  `;
  const ChartSection = styled.div`
   display:flex;
   flex-direction: column;
   padding: 10px;
   border: 1px solid #02474335;
   border-radius: 15px;
  
  
  `
  ;
  
  const Labels = styled.div`
    display: flex;
    align-items:center;
    justify-content: space-between;
    
  `;
  
  const Charts = styled.div`
    display: flex;
    width: 100%;
   
   
  
    .areaChart {
      width: 70%;
      margin: 2rem 3rem 0 0;
    }
  
    .Doughnut {
      margin: 4rem 0 0 0;
    }
  `;
  
  const TopPart = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 0 2rem 0;
  `;
  


export default Dashboard