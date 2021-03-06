import { useState } from "react";
import CharCountTable from "./CharCountTable";
import TopFive from './TopFive';
import TextInput from './TextInput';
import AnalyzeBtn from './AnalyzeBtn';

interface CharcountType {
  char: string
  count: number
}

const Main = () => {
  const [textArea, setTextArea] = useState("");
  const [characterCounts, setCharacterCounts] = useState<CharcountType[]>([]);
  const [topFive, settopFive] = useState<CharcountType[]>([]);


  const  countCharacters = (char: string, charArray: string[]) => charArray.filter(character => character === char).length

  
  const countChars = () => {
    // the text area as an array of characters, no spaces
    const characterArray = textArea.split(' ').join('').split('');
    let charCounts: CharcountType[] = [];

    characterArray.forEach(character => {
      charCounts.push({ char: character, count: countCharacters(character, characterArray) });
    });

    setCharacterCounts(charCounts);
    findTopFive(characterArray.slice());
  }


  const findTopFive = (characterCountFull: string[]) => {
    const characterSet = new Set(characterCountFull); // no repeats
    let charCounts: CharcountType[] = [];

    characterSet.forEach(character => {
      charCounts.push({ char: character, count: countCharacters(character, characterCountFull) });
    });

    charCounts.sort((a, b) => b.count - a.count);

    settopFive(charCounts.slice(0, 5));
  }


  return (
    <>
      <TextInput setTextArea={setTextArea} />
      <AnalyzeBtn countChars={countChars} />
      {!!topFive.length && <TopFive topFiveCharacters={topFive} />}
      {!!characterCounts.length && <CharCountTable lookup={characterCounts} />}
    </>
  );
}

export default Main;