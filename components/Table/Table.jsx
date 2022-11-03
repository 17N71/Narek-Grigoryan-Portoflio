import React from "react";
import { useContext } from "react";
import { dataContext } from "./../../pages/index";
import Media from "react-media";
import DowbloadCvButton from "../DowbloadCvButton/DowbloadCvButton";

const Table = ({ table }) => {
  function getMyAge() {
    const dob = new Date("04/21/2001");
    const month_diff = Date.now() - dob.getTime();
    const age_dt = new Date(month_diff);
    const year = age_dt.getUTCFullYear();
    const age = Math.abs(year - 1970);
    return age;
  }

  const { lang } = useContext(dataContext);
  return (
    <div className="flex  justify-between   md:justify-between mt-10  flex-wrap gap-10 ">
      <div className="text-xl">
        <ul className="flex flex-col gap-4">
          <li className=" text-gray-400">{table["name"][lang]["key"]}</li>
          <Media query="(min-width:503px)">
            {(matches) =>
              matches ? "" : <li>{table["name"][lang]["value"]}</li>
            }
          </Media>
          <li className=" text-gray-400">{table["age"][lang]["key"]}</li>
          <Media query="(min-width:503px)">
            {(matches) => (matches ? "" : <li>{getMyAge()}</li>)}
          </Media>
          <li className=" text-gray-400">{table["address"][lang]["key"]}</li>
          <Media query="(min-width:503px)">
            {(matches) =>
              matches ? (
                ""
              ) : (
                <li>
                  <a
                    className="border-b transition-color duration-500 dark:border-stone-400 dark:hover:border-white border-stone-500 hover:border-black "
                    href="https://goo.gl/maps/FQkpPW7aNjqprcS56"
                    target="_blank"
                    rel="noreferrer noopener noindex"
                  >
                    {table["address"][lang]["value"]}
                  </a>
                </li>
              )
            }
          </Media>
          <li className=" text-gray-400">{table["phone"][lang]["key"]}</li>
          <Media query="(min-width:503px)">
            {(matches) =>
              matches ? (
                ""
              ) : (
                <li>
                  <a
                    className="border-b transition-color duration-500 dark:border-stone-400 dark:hover:border-white border-stone-500 hover:border-black "
                    href="tel:+37441351030"
                  >
                    (+374) [041] 351030
                  </a>
                </li>
              )
            }
          </Media>
          <li className=" text-gray-400">Email</li>
          <Media query="(min-width:503px)">
            {(matches) =>
              matches ? (
                ""
              ) : (
                <li>
                  <a
                    className="border-b transition-color duration-500 dark:border-stone-400 dark:hover:border-white border-stone-500 hover:border-black "
                    href="mailto:narek07012020@gmail.com"
                  >
                    narek07012020@gmail.com
                  </a>
                </li>
              )
            }
          </Media>
        </ul>
      </div>
      <Media query="(min-width:503px)">
        {(matches) =>
          matches ? (
            <div className="text-xl">
              <ul className="flex flex-col gap-4">
                <li>{table["name"][lang]["value"]}</li>
                <li>{getMyAge()}</li>
                <li>
                  <a
                    className="border-b transition-color duration-500 dark:border-stone-400 dark:hover:border-white border-stone-500 hover:border-black "
                    href="https://goo.gl/maps/FQkpPW7aNjqprcS56"
                    target="_blank"
                    rel="noreferrer noopener noindex"
                  >
                    {table["address"][lang]["value"]}
                  </a>
                </li>
                <li>
                  <a
                    className="border-b transition-color duration-500 dark:border-stone-400 dark:hover:border-white border-stone-500 hover:border-black "
                    href="tel:+37441351030"
                  >
                    (+374) [041] 351030
                  </a>
                </li>
                <li>
                  <a
                    className="border-b transition-color duration-500 dark:border-stone-400 dark:hover:border-white border-stone-500 hover:border-black "
                    href="mailto:narek07012020@gmail.com"
                  >
                    narek07012020@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          ) : (
            ""
          )
        }
      </Media>
      <DowbloadCvButton />
    </div>
  );
};

export default Table;
