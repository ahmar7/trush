import React from "react";
import { Link } from 'react-router-dom';
import "./ContactDetails.css";
const ContactDetails = () => {
  return (
    <section className="relative bg-dark polk text-light">
      <div className="max-w-7xl xl:px-8 2xl:px-12 prose-sm MuiContainer-root-81 MuiContainer-maxWidthLg-87 md:prose lg:prose-xl pt-18 md:pt-24 pb-18 md:pb-24 mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mx-auto max-w-xl lg:max-w-none">
          <div className="!cursor-default card relative w-full h-full outline-0 overflow-hidden flex transition duration-200 ease-in-out not-prose flex-row gap-4 items-center py-3 pl-6 pr-2 rounded-2xl shadow-large shadow-black/20 hover:-translate-y-2 hover:cursor-pointer hover:shadow-black/10 bg-light text-copy">
            <div className="w-12 h-12 aspect-1">
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTYiIGhlaWdodD0iOTYiIHZpZXdCb3g9IjAgMCA5NiA5NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQ4IDk2Qzc0LjUwOTcgOTYgOTYgNzQuNTA5NyA5NiA0OEM5NiAyMS40OTAzIDc0LjUwOTcgMCA0OCAwQzIxLjQ5MDMgMCAwIDIxLjQ5MDMgMCA0OEMwIDc0LjUwOTcgMjEuNDkwMyA5NiA0OCA5NloiIGZpbGw9IiNFNkVBRjYiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zOC45MjU4IDE5LjQ4MjJDMzguOTI1OCAxOC45NzE0IDM5LjAyNjQgMTguNDY1NyAzOS4yMjE5IDE3Ljk5MzhDMzkuNDE3NCAxNy41MjE5IDM5LjcwMzkgMTcuMDkzMSA0MC4wNjUyIDE2LjczMkM0MC40MjY0IDE2LjM3MDggNDAuODU1MiAxNi4wODQ0IDQxLjMyNzIgMTUuODg5QzQxLjc5OTEgMTUuNjkzNiA0Mi4zMDQ5IDE1LjU5MzEgNDIuODE1NyAxNS41OTMzQzU3LjEzNDEgMTUuNTkzMyA2OC43MzU3IDI3LjIwMDYgNjguNzM1NyA0MS41MTlDNjguNzEzMSA0Mi41MzUyIDY4LjI5MzYgNDMuNTAyMiA2Ny41NjY5IDQ0LjIxMjlDNjYuODQwMiA0NC45MjM2IDY1Ljg2NDIgNDUuMzIxNiA2NC44NDc3IDQ1LjMyMTZDNjMuODMxMyA0NS4zMjE2IDYyLjg1NTIgNDQuOTIzNiA2Mi4xMjg1IDQ0LjIxMjlDNjEuNDAxOCA0My41MDIyIDYwLjk4MjMgNDIuNTM1MiA2MC45NTk3IDQxLjUxOUM2MC45NTk3IDMxLjQ5NTcgNTIuODM0MyAyMy4zNzUgNDIuODE1NyAyMy4zNzVDNDIuMzA0NiAyMy4zNzUxIDQxLjc5ODUgMjMuMjc0NSA0MS4zMjYzIDIzLjA3ODlDNDAuODU0MSAyMi44ODMzIDQwLjQyNTEgMjIuNTk2NSA0MC4wNjM4IDIyLjIzNUMzOS43MDI1IDIxLjg3MzQgMzkuNDE2MSAyMS40NDQyIDM5LjIyMDggMjAuOTcxOUMzOS4wMjU1IDIwLjQ5OTUgMzguOTI1MyAxOS45OTMzIDM4LjkyNTggMTkuNDgyMlYxOS40ODIyWiIgZmlsbD0iI0U2MDA3QSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTU3LjA3MzYgNzYuNTE4MUM1Ny4wNzM2IDc3LjAyODggNTYuOTczIDc3LjUzNDYgNTYuNzc3NSA3OC4wMDY1QzU2LjU4MiA3OC40Nzg0IDU2LjI5NTQgNzguOTA3MiA1NS45MzQyIDc5LjI2ODNDNTUuNTczIDc5LjYyOTQgNTUuMTQ0MSA3OS45MTU5IDU0LjY3MjIgODAuMTExM0M1NC4yMDAzIDgwLjMwNjcgNTMuNjk0NSA4MC40MDcxIDUzLjE4MzcgODAuNDA3QzM4Ljg2NTMgODAuNDA3IDI3LjI2MzcgNjguNzk5NyAyNy4yNjM3IDU0LjQ4MTNDMjcuMjg2MyA1My40NjUxIDI3LjcwNTggNTIuNDk4MSAyOC40MzI1IDUxLjc4NzRDMjkuMTU5MiA1MS4wNzY3IDMwLjEzNTIgNTAuNjc4NyAzMS4xNTE3IDUwLjY3ODdDMzIuMTY4MSA1MC42Nzg3IDMzLjE0NDIgNTEuMDc2NyAzMy44NzA5IDUxLjc4NzRDMzQuNTk3NSA1Mi40OTgxIDM1LjAxNzEgNTMuNDY1MSAzNS4wMzk3IDU0LjQ4MTNDMzUuMDM5NyA2NC41MDQ2IDQzLjE2NTEgNzIuNjI1MyA1My4xODM3IDcyLjYyNTNDNTMuNjk0OCA3Mi42MjUxIDU0LjIwMDkgNzIuNzI1OCA1NC42NzMxIDcyLjkyMTRDNTUuMTQ1MyA3My4xMTcgNTUuNTc0MyA3My40MDM4IDU1LjkzNTYgNzMuNzY1M0M1Ni4yOTY4IDc0LjEyNjkgNTYuNTgzMyA3NC41NTYxIDU2Ljc3ODYgNzUuMDI4NEM1Ni45NzM4IDc1LjUwMDggNTcuMDc0MSA3Ni4wMDcgNTcuMDczNiA3Ni41MTgxVjc2LjUxODFaIiBmaWxsPSIjRTYwMDdBIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTkuNDgyNyA1Ny4wNzM2QzE4Ljk3MTkgNTcuMDczNiAxOC40NjYxIDU2Ljk3MyAxNy45OTQyIDU2Ljc3NzVDMTcuNTIyNCA1Ni41ODIgMTcuMDkzNiA1Ni4yOTU0IDE2LjczMjUgNTUuOTM0MkMxNi4zNzEzIDU1LjU3MyAxNi4wODQ5IDU1LjE0NDEgMTUuODg5NSA1NC42NzIyQzE1LjY5NDEgNTQuMjAwMyAxNS41OTM2IDUzLjY5NDUgMTUuNTkzOCA1My4xODM3QzE1LjU5MzggMzguODY1MyAyNy4yMDExIDI3LjI2MzcgNDEuNTE5NSAyNy4yNjM3QzQyLjUzNTcgMjcuMjg2MyA0My41MDI3IDI3LjcwNTggNDQuMjEzNCAyOC40MzI1QzQ0LjkyNDEgMjkuMTU5MiA0NS4zMjIxIDMwLjEzNTIgNDUuMzIyMSAzMS4xNTE3QzQ1LjMyMjEgMzIuMTY4MSA0NC45MjQxIDMzLjE0NDIgNDQuMjEzNCAzMy44NzA5QzQzLjUwMjcgMzQuNTk3NSA0Mi41MzU3IDM1LjAxNzEgNDEuNTE5NSAzNS4wMzk3QzMxLjQ5NjEgMzUuMDM5NyAyMy4zNzU1IDQzLjE2NTEgMjMuMzc1NSA1My4xODM3QzIzLjM3NTYgNTMuNjk0OCAyMy4yNzUgNTQuMjAwOSAyMy4wNzk0IDU0LjY3MzFDMjIuODgzOCA1NS4xNDUzIDIyLjU5NyA1NS41NzQzIDIyLjIzNTQgNTUuOTM1NkMyMS44NzM5IDU2LjI5NjggMjEuNDQ0NyA1Ni41ODMzIDIwLjk3MjQgNTYuNzc4NkMyMC41IDU2Ljk3MzggMTkuOTkzOCA1Ny4wNzQxIDE5LjQ4MjcgNTcuMDczNlY1Ny4wNzM2WiIgZmlsbD0iI0U2MDA3QSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTc2LjUxNzEgMzguOTI1OEM3Ny4wMjc5IDM4LjkyNTggNzcuNTMzNyAzOS4wMjY0IDc4LjAwNTUgMzkuMjIxOUM3OC40Nzc0IDM5LjQxNzQgNzguOTA2MiAzOS43MDM5IDc5LjI2NzMgNDAuMDY1MkM3OS42Mjg1IDQwLjQyNjQgNzkuOTE0OSA0MC44NTUyIDgwLjExMDMgNDEuMzI3MkM4MC4zMDU3IDQxLjc5OTEgODAuNDA2MiA0Mi4zMDQ5IDgwLjQwNiA0Mi44MTU3QzgwLjQwNiA1Ny4xMzQxIDY4Ljc5ODcgNjguNzM1NyA1NC40ODAzIDY4LjczNTdDNTMuNDY0MSA2OC43MTMxIDUyLjQ5NzEgNjguMjkzNiA1MS43ODY0IDY3LjU2NjlDNTEuMDc1NyA2Ni44NDAyIDUwLjY3NzcgNjUuODY0MiA1MC42Nzc3IDY0Ljg0NzdDNTAuNjc3NyA2My44MzEzIDUxLjA3NTcgNjIuODU1MiA1MS43ODY0IDYyLjEyODVDNTIuNDk3MSA2MS40MDE4IDUzLjQ2NDEgNjAuOTgyMyA1NC40ODAzIDYwLjk1OTdDNjQuNTAzNiA2MC45NTk3IDcyLjYyNDMgNTIuODM0MyA3Mi42MjQzIDQyLjgxNTdDNzIuNjI0MiA0Mi4zMDQ2IDcyLjcyNDggNDEuNzk4NSA3Mi45MjA0IDQxLjMyNjNDNzMuMTE2IDQwLjg1NDEgNzMuNDAyOCA0MC40MjUxIDczLjc2NDQgNDAuMDYzOEM3NC4xMjU5IDM5LjcwMjUgNzQuNTU1MSAzOS40MTYxIDc1LjAyNzQgMzkuMjIwOEM3NS40OTk4IDM5LjAyNTUgNzYuMDA2IDM4LjkyNTMgNzYuNTE3MSAzOC45MjU4VjM4LjkyNThaIiBmaWxsPSIjRTYwMDdBIi8+Cjwvc3ZnPgo="
                alt=""
                loading="lazy"
                className="block w-full object-center object-contain aspect-1"
              />
            </div>
            <div className="block outline-0 no-underline pointer-events-auto">
              <p className="font-heading font-medium !mb-2 !opacity-100">
                For general chat
              </p>
              <div className="-mt-2">
                Join the{" "}
                {/*
                <a
                  href="https://app.element.io/#/room/!FdCojkeGzZLSEoiecf:web3.foundation?via=matrix.parity.io&via=matrix.org&via=web3.foundation"
                  className="text-primary"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Watercooler
                  <span className="external-link-icon inline-block w-3.5 h-3.5">
                    <svg
                      width={16}
                      height={16}
                      viewBox="1 -3 17 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="block text-inherit !m-0 w-full h-full"
                    >
                      <g clipPath="url(#clip0_394_7705)">
                        <path
                          d="M9.2999 1.97635L14.0139 1.97635M14.0139 1.97635L14.0139 6.6904M14.0139 1.97635L8.35709 7.63321"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_394_7705">
                          <rect width={16} height={16} fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                </a>{" "}
                or{" "}
                */}
                <a
                  href="https://dot.li/discord"
                  className="jss170"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Discord
                  <span className="external-link-icon inline-block w-3.5 h-3.5">
                    <svg
                      width={16}
                      height={16}
                      viewBox="1 -3 17 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="block text-inherit !m-0 w-full h-full"
                    >
                      <g clipPath="url(#clip0_394_7705)">
                        <path
                          d="M9.2999 1.97635L14.0139 1.97635M14.0139 1.97635L14.0139 6.6904M14.0139 1.97635L8.35709 7.63321"
                          stroke="#3060DF"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_394_7705">
                          <rect width={16} height={16} fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
         <div className="card relative w-full h-full outline-0 overflow-hidden flex transition duration-200 ease-in-out not-prose flex-row gap-4 items-center py-3 pl-6 pr-2 rounded-2xl shadow-large shadow-black/20 hover:-translate-y-2 hover:cursor-pointer hover:shadow-black/10 bg-light text-copy">
            <div className="w-12 h-12 aspect-1">
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTYiIGhlaWdodD0iOTYiIHZpZXdCb3g9IjAgMCA5NiA5NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGVsbGlwc2UgY3g9IjQ4IiBjeT0iNDcuNSIgcng9IjQ3IiByeT0iNDcuNSIgZmlsbD0iI0U2MDA3QSIvPgo8cGF0aCBkPSJNNDggOTZDNzQuNTA5NyA5NiA5NiA3NC41MDk3IDk2IDQ4Qzk2IDIxLjQ5MDMgNzQuNTA5NyAwIDQ4IDBDMjEuNDkwMyAwIDAgMjEuNDkwMyAwIDQ4QzAgNzQuNTA5NyAyMS40OTAzIDk2IDQ4IDk2WiIgZmlsbD0iI0U2RUFGNiIvPgo8cGF0aCBkPSJNNzAuNzk5NiAyNS4yMDAySDI1LjE5OTZDMjIuMzk5NiAyNS4yMDAyIDE5LjU5OTYgMjguMDAwMiAxOS41OTk2IDMxLjIwMDJWNjUuMjAwMkMxOS41OTk2IDY4LjQwMDIgMjEuOTk5NiA3MC44MDAyIDI1LjE5OTYgNzAuODAwMkg3MC4zOTk2QzczLjU5OTYgNzAuODAwMiA3NS45OTk2IDY4LjQwMDIgNzUuOTk5NiA2NS4yMDAyVjMxLjIwMDJDNzYuMzk5NiAyOC4wMDAyIDczLjU5OTYgMjUuMjAwMiA3MC43OTk2IDI1LjIwMDJaTTY5LjU5OTYgMzcuMjAwMkw0OS41OTk2IDQ5LjYwMDJDNDguNzk5NiA1MC4wMDAyIDQ3LjU5OTYgNTAuMDAwMiA0Ni4zOTk2IDQ5LjYwMDJMMjYuMzk5NiAzNy4yMDAyQzI1LjU5OTYgMzYuODAwMiAyNS4xOTk2IDM2LjAwMDIgMjUuMTk5NiAzNS4yMDAyQzI1LjE5OTYgMzMuMjAwMiAyNy4xOTk2IDMyLjAwMDIgMjguNzk5NiAzMy4yMDAyTDQ3LjU5OTYgNDUuMjAwMkw2Ni4zOTk2IDMzLjIwMDJDNjcuOTk5NiAzMi40MDAyIDY5Ljk5OTYgMzMuMjAwMiA2OS45OTk2IDM1LjIwMDJDNzAuNzk5NiAzNi4wMDAyIDcwLjM5OTYgMzYuODAwMiA2OS41OTk2IDM3LjIwMDJaIiBmaWxsPSIjRTYwMDdBIi8+Cjwvc3ZnPgo="
                alt=""
                loading="lazy"
                className="block w-full object-center object-contain aspect-1"
              />
            </div>
            <a
              href="#"
              className="block after:absolute bklack after:inset-0 after:z-10 outline-0 no-underline after:cursor-pointer"
              target="_blank"
              rel="noreferrer noopener"
            >
              <p className="font-heading  font-medium !mb-2 !opacity-100">
                For press inquiries
              </p>
              <div className="-mt-2">
                <span className="jss170">Please fill out this form</span>
              </div>
            </a>
          </div>
          <div className="card relative w-full h-full outline-0 overflow-hidden flex transition duration-200 ease-in-out not-prose flex-row gap-4 items-center py-3 pl-6 pr-2 rounded-2xl shadow-large shadow-black/20 hover:-translate-y-2 hover:cursor-pointer hover:shadow-black/10 bg-light text-copy">
            <div className="w-12 h-12 aspect-1">
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTYiIGhlaWdodD0iOTYiIHZpZXdCb3g9IjAgMCA5NiA5NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGVsbGlwc2UgY3g9IjQ4IiBjeT0iNDcuNSIgcng9IjQ3IiByeT0iNDcuNSIgZmlsbD0iI0U2MDA3QSIvPgo8cGF0aCBkPSJNNDggMEMyMS42IDAgMCAyMS42IDAgNDhDMCA3NC40IDIxLjYgOTYgNDggOTZDNzQuNCA5NiA5NiA3NC40IDk2IDQ4Qzk2IDIxLjYgNzQuNCAwIDQ4IDBaTTIwLjggMjZDMjAuOCAyMi44IDIzLjIgMjAuNCAyNi40IDIwLjRINTYuNEM1OS42IDIwLjQgNjIgMjIuOCA2MiAyNlY0NS4yQzYyIDQ4LjQgNTkuNiA1MC44IDU2LjQgNTAuOEgzMS42TDIwLjggNjEuNlYyNlpNNzUuMiA3NS4yTDY0LjQgNjQuNEgzNy4yQzM0IDY0LjQgMzEuNiA2MiAzMS42IDU4LjhWNTZINjQuNEM2NiA1NiA2Ny4yIDU0LjggNjcuMiA1My4yVjMxLjZINzBDNzMuMiAzMS42IDc1LjYgMzQgNzUuNiAzNy4yVjc1LjJINzUuMloiIGZpbGw9IiNFNkVBRjYiLz4KPC9zdmc+Cg=="
                alt=""
                loading="lazy"
                className="block w-full object-center object-contain aspect-1"
              />
            </div>
            <a
              href="#"
              className="block after:absolute bklack after:inset-0 after:z-10 outline-0 no-underline after:cursor-pointer"
              target="_blank"
              rel="noreferrer noopener"
            >
              <p className="font-heading  font-medium !mb-2 !opacity-100">
                For all other inquiries
              </p>
              <div className="-mt-2">
                <span className="jss170">support.trush.network</span>
              </div>
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-12">
          <div className="md:pr-8 md:border-r border-r-white/40">
            <div className="text-center max-w-md mx-auto">
              <h3 style={{ "color": "white" }}>Stay informed of updates and events</h3>
              <p className="lead">
                <a href="/blog" className="textlink">
                  Subscribe to the newsletter
                </a>{" "}
                or{" "}
                <Link to="/blog" className="textlink">
                  read the blog
                </Link>
              </p>
            </div>
          </div>
          <div className="md:pl-8">
            <div className="text-center max-w-md mx-auto">
              <h3 style={{ "color": "white" }}>Join the teams building Trush</h3>
              <p className="lead">
                See jobs at{" "}
                <a
                  href="https://web3.bamboohr.com/jobs/"
                  className="textlink"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Trush Foundation
                  <span className="external-link-icon inline-block w-3.5 h-3.5">
                    <svg
                      width={16}
                      height={16}
                      viewBox="1 -3 17 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="block text-inherit !m-0 w-full h-full"
                    >
                      <g clipPath="url(#clip0_394_7705)">
                        <path
                          d="M9.2999 1.97635L14.0139 1.97635M14.0139 1.97635L14.0139 6.6904M14.0139 1.97635L8.35709 7.63321"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_394_7705">
                          <rect width={16} height={16} fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                </a>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;
