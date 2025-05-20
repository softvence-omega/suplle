import { cn } from "@/lib/utils";
import { useState } from "react";
type Status = "AVAILABLE" | "COMING" | "UNAVAILABLE";
const QrDesign = () => {
  const CardData = [
    {
      icon: (
        <svg
          width="101"
          height="101"
          viewBox="0 0 101 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M41.9703 43.1036H17.7465C16.9821 43.1036 16.3623 42.4838 16.3623 41.7193V17.4955C16.3623 16.7311 16.9821 16.1113 17.7465 16.1113H41.9703C42.7347 16.1113 43.3545 16.7311 43.3545 17.4955V41.7193C43.3545 42.4838 42.7347 43.1036 41.9703 43.1036ZM19.1307 40.3351H40.5861V18.8798H19.1307V40.3351Z"
            fill="url(#paint0_linear_969_3133)"
          />
          <path
            d="M41.9703 85.3223H17.7465C16.9821 85.3223 16.3623 84.7025 16.3623 83.9381V59.7143C16.3623 58.9499 16.9821 58.3301 17.7465 58.3301H41.9703C42.7347 58.3301 43.3545 58.9499 43.3545 59.7143V83.9381C43.3545 84.7025 42.7347 85.3223 41.9703 85.3223ZM19.1307 82.5539H40.5861V61.0985H19.1307V82.5539Z"
            fill="url(#paint1_linear_969_3133)"
          />
          <path
            d="M84.1891 85.3223H59.9653C59.2008 85.3223 58.5811 84.7025 58.5811 83.9381V59.7143C58.5811 58.9499 59.2008 58.3301 59.9653 58.3301H84.1891C84.9535 58.3301 85.5733 58.9499 85.5733 59.7143V83.9381C85.5733 84.7025 84.9535 85.3223 84.1891 85.3223ZM61.3495 82.5539H82.8048V61.0985H61.3495V82.5539Z"
            fill="url(#paint2_linear_969_3133)"
          />
          <path
            d="M85.5733 41.7193H82.8049V18.8798H59.9653V16.1113H84.1891C84.9536 16.1113 85.5733 16.7311 85.5733 17.4955V41.7193Z"
            fill="url(#paint3_linear_969_3133)"
          />
          <path
            d="M78.652 37.5669H65.5019C64.7375 37.5669 64.1177 36.9471 64.1177 36.1827V23.0327C64.1177 22.2682 64.7375 21.6484 65.5019 21.6484H78.652C79.4164 21.6484 80.0362 22.2682 80.0362 23.0327V36.1827C80.0362 36.9471 79.4164 37.5669 78.652 37.5669ZM66.8861 34.7985H77.2677V24.4169H66.8861V34.7985Z"
            fill="url(#paint4_linear_969_3133)"
          />
          <path
            d="M49.8465 66.2901H47.0781V50.7177H23.0273V47.9492H48.4623C49.2268 47.9492 49.8465 48.569 49.8465 49.3334V66.2901Z"
            fill="url(#paint5_linear_969_3133)"
          />
          <path
            d="M47.0776 71.8262H49.846V77.0162H47.0776V71.8262Z"
            fill="url(#paint6_linear_969_3133)"
          />
          <path
            d="M55.7294 66.2895H52.9609V54.6967C52.9609 53.9323 53.5807 53.3125 54.3452 53.3125H63.1695V56.0809H55.7294V66.2895Z"
            fill="url(#paint7_linear_969_3133)"
          />
          <path
            d="M52.9609 71.25H55.7293V81.2267H52.9609V71.25Z"
            fill="url(#paint8_linear_969_3133)"
          />
          <path
            d="M46.4429 22.5703H49.2112V40.2186H46.4429V22.5703Z"
            fill="url(#paint9_linear_969_3133)"
          />
          <path
            d="M52.9609 30.6445H55.7293V45.0629H52.9609V30.6445Z"
            fill="url(#paint10_linear_969_3133)"
          />
          <path
            d="M71.3016 51.7557H68.5332V41.7202C68.5332 40.9557 69.153 40.3359 69.9174 40.3359H77.7036V43.1044H71.3016V51.7557Z"
            fill="url(#paint11_linear_969_3133)"
          />
          <path
            d="M73.811 53.3125H79.6077V56.0808H73.811V53.3125Z"
            fill="url(#paint12_linear_969_3133)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_969_3133"
              x1="29.8584"
              y1="9.71603"
              x2="32.5306"
              y2="47.1448"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#56DAAB" />
              <stop offset="1" stop-color="#0F9996" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_969_3133"
              x1="29.8584"
              y1="51.9348"
              x2="32.5306"
              y2="89.3636"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#56DAAB" />
              <stop offset="1" stop-color="#0F9996" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_969_3133"
              x1="72.0772"
              y1="51.9348"
              x2="74.7493"
              y2="89.3636"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#56DAAB" />
              <stop offset="1" stop-color="#0F9996" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_969_3133"
              x1="72.7693"
              y1="10.044"
              x2="75.3045"
              y2="45.5534"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#56DAAB" />
              <stop offset="1" stop-color="#0F9996" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_969_3133"
              x1="72.0769"
              y1="17.8769"
              x2="73.6528"
              y2="39.9502"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#56DAAB" />
              <stop offset="1" stop-color="#0F9996" />
            </linearGradient>
            <linearGradient
              id="paint5_linear_969_3133"
              x1="36.4369"
              y1="43.6037"
              x2="37.682"
              y2="69.1049"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#56DAAB" />
              <stop offset="1" stop-color="#0F9996" />
            </linearGradient>
            <linearGradient
              id="paint6_linear_969_3133"
              x1="48.4618"
              y1="70.5965"
              x2="49.4129"
              y2="77.7026"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#56DAAB" />
              <stop offset="1" stop-color="#0F9996" />
            </linearGradient>
            <linearGradient
              id="paint7_linear_969_3133"
              x1="58.0652"
              y1="50.2378"
              x2="59.6932"
              y2="68.1764"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#56DAAB" />
              <stop offset="1" stop-color="#0F9996" />
            </linearGradient>
            <linearGradient
              id="paint8_linear_969_3133"
              x1="54.3451"
              y1="68.8862"
              x2="57.7005"
              y2="81.9276"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#56DAAB" />
              <stop offset="1" stop-color="#0F9996" />
            </linearGradient>
            <linearGradient
              id="paint9_linear_969_3133"
              x1="47.827"
              y1="18.3889"
              x2="57.1009"
              y2="38.7648"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#56DAAB" />
              <stop offset="1" stop-color="#0F9996" />
            </linearGradient>
            <linearGradient
              id="paint10_linear_969_3133"
              x1="54.3451"
              y1="27.2284"
              x2="60.9096"
              y2="44.8825"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#56DAAB" />
              <stop offset="1" stop-color="#0F9996" />
            </linearGradient>
            <linearGradient
              id="paint11_linear_969_3133"
              x1="73.1184"
              y1="37.6302"
              x2="74.5223"
              y2="53.4214"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#56DAAB" />
              <stop offset="1" stop-color="#0F9996" />
            </linearGradient>
            <linearGradient
              id="paint12_linear_969_3133"
              x1="76.7094"
              y1="52.6566"
              x2="76.8408"
              y2="56.5104"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#56DAAB" />
              <stop offset="1" stop-color="#0F9996" />
            </linearGradient>
          </defs>
        </svg>
      ),
      name: "Classic",
      title: "Standard QR",
      desc: "Most popular, fits all tables.",
    },
    {
      icon: (
        <svg
          width="101"
          height="101"
          viewBox="0 0 101 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M33.0464 7.85938H11.6178C9.64639 7.85938 8.04639 9.45938 8.04639 11.4308V32.8594C8.04639 34.8308 9.64639 36.4308 11.6178 36.4308C13.5892 36.4308 15.1892 34.8308 15.1892 32.8594V15.0022H33.0464C35.0178 15.0022 36.6178 13.4022 36.6178 11.4308C36.6178 9.45938 35.0178 7.85938 33.0464 7.85938Z"
            fill="url(#paint0_linear_969_3232)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M68.7607 15.0022H86.6179V32.8594C86.6179 34.8308 88.2179 36.4308 90.1893 36.4308C92.1607 36.4308 93.7607 34.8308 93.7607 32.8594V11.4308C93.7607 9.45938 92.1607 7.85938 90.1893 7.85938H68.7607C66.7893 7.85938 65.1893 9.45938 65.1893 11.4308C65.1893 13.4022 66.7893 15.0022 68.7607 15.0022Z"
            fill="url(#paint1_linear_969_3232)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M68.7607 93.5742H90.1893C92.1607 93.5742 93.7607 91.9742 93.7607 90.0028V68.5742C93.7607 66.6028 92.1607 65.0028 90.1893 65.0028C88.2179 65.0028 86.6179 66.6028 86.6179 68.5742V86.4314H68.7607C66.7893 86.4314 65.1893 88.0314 65.1893 90.0028C65.1893 91.9742 66.7893 93.5742 68.7607 93.5742Z"
            fill="url(#paint2_linear_969_3232)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M33.0464 86.4314H15.1892V68.5742C15.1892 66.6028 13.5892 65.0028 11.6178 65.0028C9.64639 65.0028 8.04639 66.6028 8.04639 68.5742V90.0028C8.04639 91.9742 9.64639 93.5742 11.6178 93.5742H33.0464C35.0178 93.5742 36.6178 91.9742 36.6178 90.0028C36.6178 88.0314 35.0178 86.4314 33.0464 86.4314Z"
            fill="url(#paint3_linear_969_3232)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M47.332 57.8585C47.332 55.8871 45.732 54.2871 43.7606 54.2871H25.9035C23.932 54.2871 22.332 55.8871 22.332 57.8585V75.7157C22.332 77.6871 23.932 79.2871 25.9035 79.2871H43.7606C45.732 79.2871 47.332 77.6871 47.332 75.7157V57.8585Z"
            fill="url(#paint4_linear_969_3232)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M47.4214 25.716C47.4214 23.7445 45.8214 22.1445 43.85 22.1445H25.9928C24.0214 22.1445 22.4214 23.7445 22.4214 25.716V43.5731C22.4214 45.5445 24.0214 47.1445 25.9928 47.1445H43.85C45.8214 47.1445 47.4214 45.5445 47.4214 43.5731V25.716Z"
            fill="url(#paint5_linear_969_3232)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M79.4463 25.716C79.4463 23.7445 77.8499 22.1445 75.8749 22.1445H58.0177C56.0463 22.1445 54.4463 23.7445 54.4463 25.716V43.5731C54.4463 45.5445 56.0463 47.1445 58.0177 47.1445H75.8749C77.8499 47.1445 79.4463 45.5445 79.4463 43.5731V25.716Z"
            fill="url(#paint6_linear_969_3232)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M58.0464 57.8594H65.1892V65.0022H58.0464V57.8594Z"
            fill="url(#paint7_linear_969_3232)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M72.3608 72.1445H79.5037V79.2874H72.3608V72.1445Z"
            fill="url(#paint8_linear_969_3232)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M65.1895 65.002H72.3323V72.1448H65.1895V65.002Z"
            fill="url(#paint9_linear_969_3232)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M58.0176 72.1445H65.1604V79.2874H58.0176V72.1445Z"
            fill="url(#paint10_linear_969_3232)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M72.332 57.8594H79.4749V65.0022H72.332V57.8594Z"
            fill="url(#paint11_linear_969_3232)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_969_3232"
              x1="22.3321"
              y1="1.08992"
              x2="25.1606"
              y2="40.7085"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#56DAAB" />
              <stop offset="1" stop-color="#0F9996" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_969_3232"
              x1="79.475"
              y1="1.08992"
              x2="76.6465"
              y2="40.7085"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#56DAAB" />
              <stop offset="1" stop-color="#0F9996" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_969_3232"
              x1="79.475"
              y1="100.344"
              x2="76.6465"
              y2="60.7251"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#56DAAB" />
              <stop offset="1" stop-color="#0F9996" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_969_3232"
              x1="22.3321"
              y1="100.344"
              x2="25.1606"
              y2="60.7251"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#56DAAB" />
              <stop offset="1" stop-color="#0F9996" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_969_3232"
              x1="34.832"
              y1="48.3638"
              x2="37.307"
              y2="83.0301"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#56DAAB" />
              <stop offset="1" stop-color="#0F9996" />
            </linearGradient>
            <linearGradient
              id="paint5_linear_969_3232"
              x1="34.9214"
              y1="16.2213"
              x2="37.3963"
              y2="50.8875"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#56DAAB" />
              <stop offset="1" stop-color="#0F9996" />
            </linearGradient>
            <linearGradient
              id="paint6_linear_969_3232"
              x1="66.9463"
              y1="16.2213"
              x2="69.4212"
              y2="50.8875"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#56DAAB" />
              <stop offset="1" stop-color="#0F9996" />
            </linearGradient>
            <linearGradient
              id="paint7_linear_969_3232"
              x1="61.6178"
              y1="56.167"
              x2="62.3249"
              y2="66.0717"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#56DAAB" />
              <stop offset="1" stop-color="#0F9996" />
            </linearGradient>
            <linearGradient
              id="paint8_linear_969_3232"
              x1="75.9323"
              y1="70.4522"
              x2="76.6394"
              y2="80.3568"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#56DAAB" />
              <stop offset="1" stop-color="#0F9996" />
            </linearGradient>
            <linearGradient
              id="paint9_linear_969_3232"
              x1="68.7609"
              y1="63.3096"
              x2="69.468"
              y2="73.2142"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#56DAAB" />
              <stop offset="1" stop-color="#0F9996" />
            </linearGradient>
            <linearGradient
              id="paint10_linear_969_3232"
              x1="61.589"
              y1="70.4522"
              x2="62.2961"
              y2="80.3568"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#56DAAB" />
              <stop offset="1" stop-color="#0F9996" />
            </linearGradient>
            <linearGradient
              id="paint11_linear_969_3232"
              x1="75.9035"
              y1="56.167"
              x2="76.6106"
              y2="66.0717"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#56DAAB" />
              <stop offset="1" stop-color="#0F9996" />
            </linearGradient>
          </defs>
        </svg>
      ),
      name: " Modern",
      title: "Minimalist",
      desc: "Clean look, easy to scan.",
    },
    {
      icon: (
        <svg
          width="101"
          height="101"
          viewBox="0 0 101 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M85.9244 36.3994C85.6134 36.3994 85.3054 36.3381 85.018 36.2191C84.7307 36.1001 84.4696 35.9256 84.2496 35.7057C84.0297 35.4857 83.8553 35.2246 83.7362 34.9373C83.6172 34.6499 83.556 34.3419 83.556 34.0309V18.0376H67.8884C67.5774 18.0376 67.2694 17.9763 66.9821 17.8573C66.6947 17.7383 66.4336 17.5638 66.2137 17.3439C65.9938 17.124 65.8193 16.8629 65.7003 16.5755C65.5813 16.2882 65.52 15.9802 65.52 15.6692C65.52 15.3582 65.5813 15.0502 65.7003 14.7628C65.8193 14.4755 65.9938 14.2144 66.2137 13.9945C66.4336 13.7745 66.6947 13.6001 66.9821 13.4811C67.2694 13.362 67.5774 13.3008 67.8884 13.3008H85.9244C86.2355 13.3008 86.5434 13.362 86.8308 13.481C87.1182 13.6 87.3793 13.7745 87.5992 13.9944C87.8192 14.2143 87.9936 14.4754 88.1127 14.7628C88.2317 15.0502 88.2929 15.3581 88.2929 15.6692V34.0309C88.2929 34.3419 88.2317 34.6499 88.1127 34.9373C87.9936 35.2247 87.8192 35.4858 87.5992 35.7057C87.3793 35.9256 87.1182 36.1001 86.8308 36.2191C86.5435 36.3382 86.2355 36.3994 85.9244 36.3994Z"
            fill="url(#paint0_linear_969_3267)"
          />
          <path
            d="M33.8469 88.1328H15.8192C15.5081 88.1328 15.2002 88.0716 14.9128 87.9526C14.6254 87.8336 14.3643 87.6591 14.1444 87.4392C13.9244 87.2192 13.75 86.9581 13.6309 86.6708C13.5119 86.3834 13.4507 86.0754 13.4507 85.7644V67.7376C13.4507 67.1094 13.7002 66.507 14.1444 66.0628C14.5886 65.6187 15.191 65.3691 15.8191 65.3691C16.4473 65.3691 17.0497 65.6187 17.4939 66.0628C17.9381 66.507 18.1876 67.1094 18.1876 67.7376V83.396H33.8469C34.475 83.396 35.0774 83.6455 35.5216 84.0897C35.9658 84.5338 36.2153 85.1362 36.2153 85.7644C36.2153 86.3925 35.9658 86.9949 35.5216 87.4391C35.0774 87.8833 34.475 88.1328 33.8469 88.1328Z"
            fill="url(#paint1_linear_969_3267)"
          />
          <path
            d="M15.8192 36.3994C15.5081 36.3994 15.2001 36.3382 14.9128 36.2191C14.6254 36.1001 14.3643 35.9256 14.1444 35.7057C13.9244 35.4858 13.75 35.2247 13.6309 34.9373C13.5119 34.6499 13.4507 34.3419 13.4507 34.0309V15.6692C13.4507 15.3581 13.5119 15.0502 13.6309 14.7628C13.75 14.4754 13.9244 14.2143 14.1444 13.9944C14.3643 13.7745 14.6254 13.6 14.9128 13.481C15.2002 13.362 15.5081 13.3008 15.8192 13.3008H33.8469C34.475 13.3008 35.0774 13.5503 35.5216 13.9945C35.9658 14.4386 36.2153 15.041 36.2153 15.6692C36.2153 16.2973 35.9658 16.8997 35.5216 17.3439C35.0774 17.7881 34.475 18.0376 33.8469 18.0376H18.1876V34.0309C18.1876 34.3419 18.1264 34.6499 18.0074 34.9373C17.8884 35.2246 17.7139 35.4858 17.494 35.7057C17.274 35.9256 17.0129 36.1001 16.7256 36.2191C16.4382 36.3381 16.1302 36.3994 15.8192 36.3994Z"
            fill="url(#paint2_linear_969_3267)"
          />
          <path
            d="M85.9244 88.1328H67.8884C67.2603 88.1328 66.6579 87.8833 66.2137 87.4391C65.7695 86.9949 65.52 86.3925 65.52 85.7644C65.52 85.1362 65.7695 84.5338 66.2137 84.0897C66.6579 83.6455 67.2603 83.396 67.8884 83.396H83.556V67.7376C83.556 67.1094 83.8055 66.507 84.2497 66.0628C84.6939 65.6187 85.2963 65.3691 85.9245 65.3691C86.5526 65.3691 87.155 65.6187 87.5992 66.0628C88.0434 66.507 88.2929 67.1094 88.2929 67.7376V85.7644C88.2929 86.0754 88.2317 86.3834 88.1127 86.6708C87.9936 86.9581 87.8192 87.2192 87.5992 87.4392C87.3793 87.6591 87.1182 87.8336 86.8308 87.9526C86.5434 88.0716 86.2355 88.1328 85.9244 88.1328Z"
            fill="url(#paint3_linear_969_3267)"
          />
          <path
            d="M75.682 35.7587C75.371 35.7587 75.063 35.6975 74.7757 35.5785C74.4883 35.4595 74.2272 35.285 74.0073 35.0651C73.7873 34.8451 73.6129 34.584 73.4939 34.2967C73.3748 34.0093 73.3136 33.7013 73.3136 33.3903V28.2779H68.4324C67.8043 28.2779 67.2018 28.0284 66.7577 27.5842C66.3135 27.14 66.064 26.5376 66.064 25.9095C66.064 25.2813 66.3135 24.6789 66.7577 24.2347C67.2018 23.7905 67.8043 23.541 68.4324 23.541H75.682C75.993 23.541 76.301 23.6022 76.5884 23.7213C76.8758 23.8403 77.1369 24.0147 77.3568 24.2346C77.5767 24.4546 77.7512 24.7157 77.8702 25.003C77.9893 25.2904 78.0505 25.5984 78.0505 25.9094V33.3903C78.0505 33.7014 77.9893 34.0093 77.8703 34.2967C77.7512 34.5841 77.5768 34.8452 77.3568 35.0651C77.1369 35.285 76.8758 35.4595 76.5884 35.5785C76.3011 35.6975 75.9931 35.7587 75.682 35.7587Z"
            fill="url(#paint4_linear_969_3267)"
          />
          <path
            d="M33.305 77.8922H26.0619C25.7508 77.8922 25.4428 77.8309 25.1555 77.7119C24.8681 77.5929 24.607 77.4185 24.3871 77.1985C24.1671 76.9786 23.9927 76.7175 23.8736 76.4301C23.7546 76.1428 23.6934 75.8348 23.6934 75.5238V68.2806C23.6934 67.6524 23.9429 67.05 24.3871 66.6058C24.8312 66.1616 25.4337 65.9121 26.0618 65.9121C26.69 65.9121 27.2924 66.1616 27.7366 66.6058C28.1807 67.05 28.4303 67.6524 28.4303 68.2806V73.1553H33.305C33.9331 73.1553 34.5355 73.4048 34.9797 73.849C35.4239 74.2931 35.6734 74.8956 35.6734 75.5237C35.6734 76.1519 35.4239 76.7543 34.9797 77.1985C34.5355 77.6426 33.9331 77.8922 33.305 77.8922Z"
            fill="url(#paint5_linear_969_3267)"
          />
          <path
            d="M26.0619 35.7587C25.7508 35.7587 25.4428 35.6975 25.1555 35.5785C24.8681 35.4595 24.607 35.285 24.387 35.0651C24.1671 34.8452 23.9926 34.5841 23.8736 34.2967C23.7546 34.0093 23.6933 33.7014 23.6934 33.3903V25.9094C23.6934 25.5984 23.7546 25.2904 23.8736 25.003C23.9927 24.7157 24.1671 24.4546 24.3871 24.2346C24.607 24.0147 24.8681 23.8403 25.1555 23.7213C25.4428 23.6022 25.7508 23.541 26.0619 23.541H33.305C33.9331 23.541 34.5355 23.7905 34.9797 24.2347C35.4239 24.6789 35.6734 25.2813 35.6734 25.9095C35.6734 26.5376 35.4239 27.14 34.9797 27.5842C34.5355 28.0284 33.9331 28.2779 33.305 28.2779H28.4303V33.3903C28.4303 33.7013 28.369 34.0093 28.25 34.2967C28.131 34.584 27.9565 34.8451 27.7366 35.0651C27.5167 35.285 27.2556 35.4595 26.9682 35.5785C26.6809 35.6975 26.3729 35.7587 26.0619 35.7587Z"
            fill="url(#paint6_linear_969_3267)"
          />
          <path
            d="M75.682 77.8922H68.4324C67.8043 77.8922 67.2018 77.6426 66.7577 77.1985C66.3135 76.7543 66.064 76.1519 66.064 75.5237C66.064 74.8956 66.3135 74.2931 66.7577 73.849C67.2018 73.4048 67.8043 73.1553 68.4324 73.1553H73.3136V68.2806C73.3136 67.6524 73.5631 67.05 74.0073 66.6058C74.4515 66.1616 75.0539 65.9121 75.6821 65.9121C76.3102 65.9121 76.9126 66.1616 77.3568 66.6058C77.801 67.05 78.0505 67.6524 78.0505 68.2806V75.5238C78.0505 75.8348 77.9893 76.1428 77.8702 76.4301C77.7512 76.7175 77.5767 76.9786 77.3568 77.1985C77.1369 77.4185 76.8758 77.5929 76.5884 77.7119C76.301 77.8309 75.993 77.8922 75.682 77.8922Z"
            fill="url(#paint7_linear_969_3267)"
          />
          <path
            d="M93.5027 53.0845H8.23949C7.61136 53.0845 7.00894 52.8349 6.56478 52.3908C6.12062 51.9466 5.87109 51.3442 5.87109 50.7161C5.87109 50.0879 6.12062 49.4855 6.56478 49.0413C7.00894 48.5972 7.61136 48.3477 8.23949 48.3477H93.5027C94.1308 48.3477 94.7332 48.5972 95.1774 49.0413C95.6216 49.4855 95.8711 50.0879 95.8711 50.7161C95.8711 51.3442 95.6216 51.9466 95.1774 52.3908C94.7332 52.8349 94.1308 53.0845 93.5027 53.0845Z"
            fill="url(#paint8_linear_969_3267)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_969_3267"
              x1="76.9065"
              y1="7.82801"
              x2="79.2255"
              y2="39.853"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#56DAAB" />
              <stop offset="1" stop-color="#0F9996" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_969_3267"
              x1="24.833"
              y1="59.9757"
              x2="27.0864"
              y2="91.541"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#56DAAB" />
              <stop offset="1" stop-color="#0F9996" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_969_3267"
              x1="24.833"
              y1="7.82801"
              x2="27.1529"
              y2="39.8529"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#56DAAB" />
              <stop offset="1" stop-color="#0F9996" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_969_3267"
              x1="76.9065"
              y1="59.9757"
              x2="79.1591"
              y2="91.5411"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#56DAAB" />
              <stop offset="1" stop-color="#0F9996" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_969_3267"
              x1="72.0572"
              y1="20.6463"
              x2="73.2898"
              y2="37.5846"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#56DAAB" />
              <stop offset="1" stop-color="#0F9996" />
            </linearGradient>
            <linearGradient
              id="paint5_linear_969_3267"
              x1="29.6834"
              y1="63.0737"
              x2="30.8694"
              y2="79.6858"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#56DAAB" />
              <stop offset="1" stop-color="#0F9996" />
            </linearGradient>
            <linearGradient
              id="paint6_linear_969_3267"
              x1="29.6834"
              y1="20.6463"
              x2="30.9166"
              y2="37.5845"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#56DAAB" />
              <stop offset="1" stop-color="#0F9996" />
            </linearGradient>
            <linearGradient
              id="paint7_linear_969_3267"
              x1="72.0572"
              y1="63.0737"
              x2="73.2426"
              y2="79.6859"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#56DAAB" />
              <stop offset="1" stop-color="#0F9996" />
            </linearGradient>
            <linearGradient
              id="paint8_linear_969_3267"
              x1="50.8711"
              y1="47.2254"
              x2="50.8959"
              y2="53.827"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#56DAAB" />
              <stop offset="1" stop-color="#0F9996" />
            </linearGradient>
          </defs>
        </svg>
      ),
      name: "Custom",
      title: "Branded",
      desc: "Add your logo and colors.",
    },
  ];
  const [tabs, setTabs] = useState<Status>("AVAILABLE");
  return (
    <div className="font-rubik">
      <h1 className="font-rubik text-sm sm:text-[18px] mt-7">JJJJ</h1>

      {/*  TABS */}
      <div>
        <div className="flex items-center space-x-5 border-b-[2px]">
          <button
            onClick={() => setTabs("AVAILABLE")}
            className={cn(
              "py-[8px] sm:py-[12px] pr-[15px] sm:pr-[25px] text-[10px] sm:text-[15px] font-light cursor-pointer",
              tabs === "AVAILABLE" &&
                "border-b-[2px] font-normal border-green-600"
            )}
          >
            Available
          </button>
          <button
            onClick={() => setTabs("COMING")}
            className={cn(
              "py-[8px] sm:py-[12px] pr-[15px] sm:pr-[25px] text-sm sm:text-[15px] font-light cursor-pointer",
              tabs === "COMING" && "border-b-[2px] border-green-600 font-normal"
            )}
          >
            Coming Soon
          </button>
          <button
            onClick={() => setTabs("UNAVAILABLE")}
            className={cn(
              "py-[8px] sm:py-[12px] pr-[15px] sm:pr-[25px] text-sm sm:text-[15px] font-light cursor-pointer",
              tabs === "UNAVAILABLE" &&
                "border-b-[2px] border-green-600 font-normal"
            )}
          >
            Unavailable
          </button>
        </div>
        {/* TABLE */}
        {/* {tabs === "RESTAURANT" ? (
          <AllRestaurant />
        ) : tabs === "ACTIVE" ? (
          <Activity />
        ) : (
          tabs === "PENDING" && <Pending />
        )} */}
      </div>
      {/* ADD RESTAURANT FORM HERE */}

      <div className="mt-7 space-y-4 w-full">
        <h1 className="font-rubik text-sm sm:text-[18px]">Available Designs</h1>
        <div className="flex items-center  justify-between gap-4">
          {CardData?.map((item, index) => {
            return (
              <div
                key={index}
                className="rounded-md w-[30%] bg-white border border-green-50 shadow-md p-3 space-y-3"
              >
                <div className="text-center">{item.icon}</div>
                <p className="text-[10px] sm:text-sm font-light text-center text-green-800">
                  {item.name}
                </p>
                <h1 className="text-sm sm:text-lg font-medium text-center text-green-800">
                  {item.title}
                </h1>
                <p className="text-[10px] sm:text-sm font-light text-center text-green-800">
                  {item.desc}
                </p>
                <div className="flex items-center w-full justify-between space-x-3">
                  <button className="px-4 py-2 w-full dark:text-black  rounded-md font-light bg-green-100 cursor-pointer">
                    Cancel
                  </button>
                  <button className="px-4 py-2 w-full  text-white rounded-md font-light bg-green-700 cursor-pointer">
                    Apply
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* {restaurantForm && <RestaurantForm />} */}
    </div>
  );
};

export default QrDesign;
