import React, { useState } from "react";
import Image from "next/image";

import Tag from "@/components/Tag";
import ProfileImg from "../../public/profile.jpg";

import styled from "@emotion/styled";
import { BsFillBookmarkFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { IconContext } from "react-icons";

const temp1 = ["대학생", "미술"];
const temp2 = ["잠시맘 교육 인증", "교직이수"];

type SitterCardProps = {
  name: string;
};

export default function SitterCard({ name }: SitterCardProps) {
  const [favorite, setFavorite] = useState<boolean>(false);

  const handleClick = () => {
    setFavorite((curr) => !curr);
  };

  const detail = (data: string[], color: string) => {
    return data.map((v, idx) => {
      if (idx > 0) {
        return (
          <DivideTag>
            <Divider />
            <Tag color={color}>{v}</Tag>
          </DivideTag>
        );
      } else {
        return <Tag color={color}>{v}</Tag>;
      }
    });
  };

  return (
    <>
      <Container>
        <ProfileImage>
          <Image
            style={{ objectFit: "cover", borderRadius: "50%" }}
            src={ProfileImg}
            width={80}
            height={80}
            alt="프로필 이미지"
          />
        </ProfileImage>
        <Info>
          <NamePrefer>
            <div>
              <Name>{name}&nbsp;&nbsp;</Name>
              <span>여 / 20대</span>
            </div>
            <IconContext.Provider
              value={{
                size: "24",
                color: favorite ? "#5A2F0F" : "gray",
              }}
            >
              <FavoriteButton onClick={handleClick}>
                <BsFillBookmarkFill />
              </FavoriteButton>
            </IconContext.Provider>
          </NamePrefer>
          <TagWrapper>{detail(temp1, "#FFF8F5")}</TagWrapper>
          <TagWrapper>{detail(temp2, "#FBE7D9")}</TagWrapper>

          <Star>
            <IconContext.Provider
              value={{
                size: "24",
                color: "#FCB25B",
              }}
            >
              <AiFillStar />
            </IconContext.Provider>
            <span>&nbsp;&nbsp;5.0/5 (4명)</span>
          </Star>
        </Info>
      </Container>
      <TextWrapper>
        <span>제 동생처럼 열심히 보살피겠습니다!</span>
      </TextWrapper>
    </>
  );
}

const Container = styled.div`
  padding: 16px 16px 12px 16px;
  display: flex;
  height: 139px;
`;

const ProfileImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25%;
  margin-right: 8px;
`;

const Info = styled.div`
  width: 75%;
`;
const Name = styled.span`
  font-weight: bold;
`;

const NamePrefer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FavoriteButton = styled.button`
  border: none;
  background-color: #fff;
  cursor: pointer;
`;

const TagWrapper = styled.div`
  display: flex;
  margin: 12px 0px;
`;

const Star = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
`;

const TextWrapper = styled.div`
  padding: 16px;
`;

const Divider = styled.div`
  display: inline-block;
  border: thin solid #e4e4e4;
  margin: 0px 6px;
  height: 18px;
`;

const DivideTag = styled.div`
  display: flex;
  align-items: center;
`;
