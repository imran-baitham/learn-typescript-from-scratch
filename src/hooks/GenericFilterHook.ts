// import { Industries } from "../mock/index";
import Industries from "../mock/services/UserData.json";

interface dataProps {
  id?: number | string;
  title: string;
  subtitle: string;
}
export interface UserDataProps {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  createdDate: string;
  updatedDate: string;
  role: string;
  lastVisited: string;
  speciality: string;
  phoneNumber: string;
  image: string;
}

interface GenericFilterProps {
  data: UserDataProps[];
}

function GenericFilterHook({ data }: GenericFilterProps) {
  const getFirstCharacter: string[] = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const getSequenceIndusty = getFirstCharacter.map((char) => {
    const industries = Industries.filter(
      (item) => item.firstName.charAt(0) === char
    );
    return { char, industries };
  });
  let filteredList = getSequenceIndusty.filter((industry) => {
    return industry.industries.length > 0;
  });
  return { filteredList };
}

export default GenericFilterHook;
