import Section from "@/components/Section";
import styled from "@emotion/styled";
import { BiCheckboxChecked } from "react-icons/bi";
import { IconContext } from "react-icons";
import Button from "@/components/Button";
import { useRouter } from "next/router";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const tempData = ["박주미", "박강빈"];

export default function Search() {
  const router = useRouter();

  const searchHandleClick = () => {
    router.push("/search/list");
  };

  const childrenList = (arr: string[]) => {
    return arr.map((v) => {
      return (
        <Option key={v}>
          <IconContext.Provider
            value={{
              size: "24",
              color: "gray",
            }}
          >
            <CheckWrapper>
              <BiCheckboxChecked />
            </CheckWrapper>
          </IconContext.Provider>
          <ChildInfo>
            <div>
              <span>{v}</span>
              <span>여 / 24개월</span>
            </div>
            <div>
              <span>특이사항</span>
            </div>
            <ul>
              <li>땅콩 알러지 있음</li>
            </ul>
          </ChildInfo>
        </Option>
      );
    });
  };

  // const dateHandleChange = (value: Date, context: Date) => {
  //   console.log(value, context);
  // };

  return (
    <div>
      <Section title="돌봄대상" required={true}>
        <div>
          <Check>
            <BiCheckboxChecked />
          </Check>
          <span>전체선택</span>
          {childrenList(tempData)}
        </div>
      </Section>
      <Section title="날짜" required={true}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker timezone="system" />
        </LocalizationProvider>
      </Section>
      <Section title="시간" required={true}>
        test
      </Section>
      <Button w="100%" onClick={searchHandleClick}>
        시터 검색
      </Button>
    </div>
  );
}

const CheckWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15%;
`;

const Check = styled.button`
  border: none;
  background-color: #fff;
  cursor: pointer;
`;

const Option = styled.div`
  width: 100%;
  height: 120px;
  border: 1px solid #fa9825;
  background-color: #fff;
  border-radius: 4px;
  margin: 12px 0px;
  cursor: pointer;
  display: flex;
`;

const ChildInfo = styled.div`
  margin: 25px 8px;
`;
