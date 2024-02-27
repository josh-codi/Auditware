import React from "react";
import styled from "styled-components";
import Forward from '../../../Auth/assets/images/Forward.svg';
import { avatar } from "../../../../Assets";

function SmallCard() {
  const members = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  const [collapse, setColl] = React.useState({ Columns: false });

  return (
    <Container>
      <Columns>
        <aside>Members</aside>
        <Pointer>
          See all <img height='10px' src={Forward} />
        </Pointer>
      </Columns>
      <Columns>
        {members.map((mem, idx) => {
          if (idx < 1) {
            return (
              <React.Fragment key={`mem-${idx}`}>
                <div className="profileImg rounded-full overflow-hidden bg-gray-300 shadow">
                  <img src={avatar} alt="" className='' />
                </div>
                <aside>Michael Boateng</aside>
                <aside>2 Workspaces, 3 Projects</aside>
              </React.Fragment>
            );
          }
          return <React.Fragment key={`mem-${idx}`} />;
        })}
      </Columns>
      <Columns>
        {members.map((mem, idx) => {
          if (idx < 1) {
            return (
              <React.Fragment key={`mem-${idx}`}>
                <div className="profileImg rounded-full overflow-hidden bg-gray-300 shadow">
                  <img src={avatar} alt="" className='' />
                </div>
                <aside>Sedem Dzodzi</aside>
                <aside>1 Workspace, 1 Project</aside>
              </React.Fragment>
            );
          }
          return <React.Fragment key={`mem-${idx}`} />;
        })}
      </Columns>
      <Columns>
        {members.map((mem, idx) => {
          if (idx < 1) {
            return (
              <React.Fragment key={`mem-${idx}`}>
                <div className="profileImg rounded-full overflow-hidden bg-gray-300 shadow">
                  <img src={avatar} alt="" className='' />
                </div>
                <aside>Lauren Mills</aside>
                <aside>2 Workspaces, 2 Projects</aside>
              </React.Fragment>
            );
          }
          return <React.Fragment key={`mem-${idx}`} />;
        })}
      </Columns>
      <Columns>
        {members.map((mem, idx) => {
          if (idx < 1) {
            return (
              <React.Fragment key={`mem-${idx}`}>
                <div className="profileImg rounded-full overflow-hidden bg-gray-300 shadow">
                  <img src={avatar} alt="" className='' />
                </div>
                <aside>Joseph Manu</aside>
                <aside>1 Workspaces, 3 Projects</aside>
              </React.Fragment>
            );
          }
          return <React.Fragment key={`mem-${idx}`} />;
        })}
      </Columns>
    </Container>
  );
}

const Container = styled.div`
  margin: 0;
  width: 422px;
  height: fit-content;
  border: 1px solid #02474335;
  padding: 0.8rem;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  text-align: left;
  cursor: pointer;
  color: gray;
`;

const Vr = styled.div`
  border: 1px solid #02474335;
  height: 14px;
`;

const Columns = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0 1rem 0;

  .profileImg {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 0px;
    border: 1px solid #0A9C93;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

const Pointer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 0 4rem;
`;

export default SmallCard;
