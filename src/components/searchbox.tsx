import { useState, useRef, useCallback, useEffect } from 'react';
import { Autocomplete, Loader, TextInput } from '@mantine/core';
import { debounce } from 'lodash';
import { StatsGridIcons } from './StatGrid';
interface IDataProps {
  title: string;
  value: string;
  sector: string;
}
export function SearchBox() {
  const [response, setData] = useState<IDataProps[]>();
  useEffect(() => {
    const run = async () => {
      const response = await fetch(
        `http://localhost:4000/dividend/list/random`
      );
      const dataRes = await response.json();
      console.log(dataRes);

      setData(
        dataRes.data.map((data: any) => {
          return {
            title: data.scriptName,
            value: data.bonusCapacity,
            sector: data.sector,
          };
        })
      );
    };
    run();
  }, []);

  const debounce = (callback: any, timeout: number = 1000) => {
    let time: number;
    return (...args: any) => {
      clearTimeout(time);
      time = setTimeout(() => {
        callback(...args);
      }, timeout);
    };
  };

  const handleChange = debounce((text: string) => {
    console.log(text);

    fetch(`http://localhost:4000/dividend/filter/?q=${text}`)
      .then((res) => {
        res.json().then((data) => {
          console.log(data);

          setData(
            data.data.map((data: any) => {
              return {
                title: data.scriptName,
                value: data.bonusCapacity,
                sector: data.sector,
              };
            })
          );
        });
      })
      .catch((err) => {
        console.log(err);
        setData([
          {
            title: 'No Data',
            value: '-1',
            sector: 'null',
          },
        ]);
      });
  }, 1000);

  return (
    <>
      <TextInput
        onChange={(e) => {
          handleChange(e.target.value);
        }}
        placeholder="Search Listed Company"
        withAsterisk
      />

      {response && <StatsGridIcons data={response} />}
    </>
  );
}
