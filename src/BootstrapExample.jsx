import React from 'react'

export default function BootstrapExample() {
  return (
    // <div>
    //     BootstrapExample
    //     <table className='table table-bordered border-dark bg-waring text-dark responsive striped="columns" striped'>
    //         <tr>
    //             <th>Roll No.</th>
    //             <th>Name</th>

    //         </tr>
    //         <tr>
    //             <td>1</td>
    //             <td>Vaibahv</td>

    //         </tr>
    //         <tr>
    //             <td>2</td>
    //             <td>Vaibhav</td>
    //         </tr>
    //     </table>

    //     <img className='img-thumbnail rounded rounded-circle img-fluid' src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQBBAMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAEBQMGAAECB//EADsQAAIBAwMDBAEBBgMHBQEAAAECAwAEEQUSIRMxQQYiUWFxMhQjgaGx0UKR8BUWJFLB4fEzQ2KCkgf/xAAaAQADAQEBAQAAAAAAAAAAAAABAgMEAAUG/8QAJREAAgICAgICAgMBAAAAAAAAAAECEQMhEjEEQRMUIlEFMkIk/9oADAMBAAIRAxEAPwC5mXHmuP2j3UsluuDzUK3RJ718dKVdBLLbXQHc0d+1rt4aqvFcn5oyGfd5qkPJcVR1DgzbjXavmgYnyRRqD4pU3J2xkyeNqkMlDg4rotVV0UsnD1IrUMlTLXI6ybdxUeea0zjHeo93NGUjggHiu1eoA1dKeaHM4KVqkBodTXW6rwyUI2EBqzdQ+81vfWqGSxWztmqOR+K0zVC7HtVUTbIpZMVGs33Uc7HBoVJBuC55rPmlxdsTsYdX7Fb6goBpAMYIO7tg1glPbzQjltWjgqaXaCaAkusnuK3ePtiSQNw+Qfo/FQ/sa3B2wSfvFUFg3Zf9fFZc2RvoV2aebcO9ItWO4GpnucbscgHuBxS+9uNy9+ax5G6M+WTa2CAfNRTSBeMj/OoZ7jb2NLZblnehigzOgyVt9R9BsZ8VlsQ3emQClMYppZHFnChouayjHQbjWVrjndADppWHmuoCWGaF3bu5ouBlC1KaVHs2FwEmi45NtCQsAK7eQAV5bk1MFjO3uQHGTTuB1dQQapYmIbOacWF4RgH+ta8c9BLASK5LUGs4Pmu+sPmrcx0Gq2KkV/ulwnHzW+v4FD5aCHO9cBuahR9wrsAminZ1k6yVKjZNDoh+anjBBrmmLYQGrhpMd63UE2RS2wHZmHzXSy580qmkYHvXEN0Q/Jxir4srQljsNkfFRynauSQCeACe9QxziQb9x2gc8UFqN10Cs0hY7ZtqhRkD28f1rRPyVVI5rQRL0yGLvgAVCWtipOP3jrjY/Yt8A0BqN9bxyCJesGYA4ZM5XzSHV9VvLOaNnLNAsgZZDtIK5wePBqOTK8j0LaRYpzFbQqbeQsrMpTcP07vJ/rXU2pRuCkpxKzZCKPcceMeKquoa9PPAZo41MSxjc/YEZzjGe/HaleoTq9xBcLMUmbDMpxj2jIwR5oRjJCORcFuhcSz2jdISKxf95kAg+Aw81LYyCe4aZJd0WBHhMHnPkj81UbjUJrMWV1DDCERlYIjHLj5Zf/lUUmpNaWsi5jiZv/UHU/xHngDwCO9OsUtMHIuSy25ivLJ03tvT9KZ3AcjOPnHNVnULcQ2vU60e8sQVU5Vh4I/sah0jUlsraSe/2zC9jOVRsMo7EEY4BFSSwwSWcKOj2sqqwChTI02Mc544wf5GkyY7RGe0IJ2Y5+PmgieScirMukwtYWl31jJ1rjpyRKOUXPcf681B6utobaOCC3/Z1S2VgSJB1Hy3GRVMUESePVim2lxR4uMDvVfS42H5ogXeR/3rsni29CUNxLnnNapULvH/AJrKovG0dQ1EuPNERXHFJ+t91JHN91OcLPTssEMwPmu3kGO9JornHmiRPuHevNnhakBhZkHzR1pOOOaSNJmpYbjaeTTRiMmWZJ8ea7NzjzSRb1cDmtm9B81VwKJjkXOfNFQSFgKr0dxyOabWMwIFTcDmx3AM0fGvFLraRaYxSDHFXxJWCydEAFdAYNc7+OK0H5rS4qgEjEAUPMd1dyOAO9BvOtZZpWCyC5TvQkEZMp4BCjcQx4NGkrK2N4BPjFcQNbxCR5gWUf8AuZwABTdIUlhmLKsbR4ZxlSo5Iz5+qTanfiUkpFEhjB4lcj3jjIGMd/NT3epQoWcM+5cKcjAC48VtmhuhcpbQRFlwrZwTx3OT2pZyTo5srlxrEl7aTzs6wSxx7Agz+M5GRk+PnFItQ1aKbSkj2KXCZVw2Sp+CKN1MW0SXDdQqkycxwjbhh85+/FVSGWO2mW5ZymV/dqEBG7Px8fdaceOMtojJjB9Shl0tbMJNlpFXA4U9sg8/zoZrpmjiiUj2o4JI/Vx2HHfFAXN6biRJBH3fc20d2PPNalke5dJB0kDybchsBMnGD8fn4rYsfsVDVpcWiyzS3cjxuki7AgA5HH6iew8Cgjcf7T1C26h952gMq5I5JPt8+MCopb17O2lsgIc9TcJY1G/tgjPwf+9BW93HbXyTy2ihVORGGK4P9QapGAaLPeataW9uwt7NIV3hH3R8llYHvSdtZlk3PvId5lO8ucqPgD4pfLc/tFq7d0Epb3NkgknnNRLd9SVdiAAEH3fVd8S7EaPVNPna9WKyCuijfIlyFCq3lSV74z/SqhrQlWYpNEsbDwE25+6aaVdSSaYzRhXidxFskfncBkvnvgYxUmr6VDPp95qCzM0wKsluAeFH6zyc4GRzWeLUZ7BVlNkJBrnqla7lHf8AtQz16EYpg4khnNZQp71un4o6h2r5qZWoNDU6mvL7NSCkc570ZA+aXxnmjYDgismZbC2HCPIzWmjIou0XfU7267ee9Rx9nChmKjGTWklPyaIu4doJFLycPWnjYbGcc33TOzvQuATVdEnFbW5KnApXjOsu0OoAAYYUdDqeP8QqjQ3bk0Yl0/FKoUdyL7b36uOTRRnTHBqiW166Ec0xTUmIHuqlOgch5dXWM4NAPdfdAyXTyea46tS4WxHIKe8YnGSAabzLbnTW6JZwFIPALEfj+lVWacZpzpjGyjMsi5YqG3fHGMY8+DRmoxX5DRYr1TrToLaz2QzL7n95O5sYwAe3bt/OqmdQeymmt1nkeFz7iOGLec/I/wAjTzV9QhbqdSMpcCRmMwBHUJP1VdulExaYRoS5I3CMqo/AzTYaa2Tl2c6jcu8kU9y7FJ1wGDc8fXmhrmWzkdXPKugdcJk7wMEfQJwf86iuMoGee6Ke7cqKOf4ceKTo5s7pbiWIzR4969jzW/FjVaOSGs1lEY0isGV5tgeUp2TA5/I5xmg9NvrGN1e9LCMpl4lQ5c8qy5Bwo/P+VE2z7Z4Ok6p1oyrS2+WIQ8lcE4rnSNLfU+te2wUrLI6AtHuwvbPwPnPcVdVGLcg6FcsjNdAI6Et3PYCoLlwXAKyZx7ndtxY/XxTf1XYy6Y1qu63956aiGMrn8k9yc0rmsgk8cKXCdRmO934CYqkVqzktWRq+xSq+3cPPaure52iMOiuinO1hwfyaKXRLiO4jjkJKOcLIEOCfod//ADUTWJScwz7oiGwR2FByiB0PvTd9cwFQtitxyemckKp8+cEH7/NWW01todPuEn6bdZCrjaWIBIBHfgcffeqvoovC8VtCCWwwBj4LDnPemGq2kNnbxTW92nVDbHg3EyKcHk8ADtjH96zShGUxKJ4Ybd/9pG2ktbW3u4OnGlw24j3LkgjsRgnH3Vc1a3htb2SG2uluY14EqqVDfPFdM7kYJ+/rPz+aElGBWyEKBYO3esrlu9ZVBtDON6m6lLUm+6lEua85QdlhjHLzRcU/3SdJPupklNQyY7YrLfp83AyaPaTiqvY3nYFqbrdAr+rxUfjoFnV2/FJriTa/FFXdyAvekk9xufINVimhkxikoPGamQbvxSaOc570ytpsgUWgtjGJMUUvAoSN8ipg9JRNyCFbBoiOQ5oJWomE06QrYejZFRzzbexrgybV470HcS57Gio7Oi22cT3BJ70807VnmWCKUqiRJ7n8nHbA+ccVX0TeRTS0g7CjkxRkqYXOhhFFBqAuDPGP3kg2qO4Wlx0m+kN0rEvAJG2EIMcjkrmn9jGIyCnHyaPQBUGOOMfipLA10Ldnmeo6VOsw22wVCNsZJ9i/96ifTrJPUFpbNKt5bB8yjZhd2CSvzXpd3DbXdr0Lm1jkUcjOcg/woCPTLG2Vf2e3RCg9pGSR/Hz+TTfI4IZtLo8w1/TLjRgmo6ejJZzBlMbrkxFsgqP+hpn6Iu4bT0xK88gSKGZmY/8AKDVq9R2gvtLu7Yg+9CV5/wAQ5H8xXipmlWJold1RjkoDwT+K14f+jE0xl+SLBPJe+ptZc25/cRn928g4iTPgeCe/zT3TtFtdPmSR98zZJkbOGfIPnx3zRfp/T4tL0qOPjqye+U/Z8fwomZlNJlyNy4x6ROeTdIgRLS2Qs8txLtf92wb3of8AmweDSgTPBcCZkSfDbmSddyt+aZyAGgblBiux40uyfMAe9ljuOvDtiffvHTGAh8Y+qHmuZLiZ5pmLSOdzMfJrqdME0PtxWqMUg8iXcKil5rfNcMcVZC2QFOa3XWaymOsCVyKnjbPFF2Omu0ccoXqtM/ThiXlmfwKGQN1WDgqwJDKRyCOMVmTXo1qVkoJxXQciulUYqQ20rQmVYnMYOC4HANJKF7A2dRSNkYzR6XEyLgc0NZxZxmm0cClazsRsUXM0z5DdqE3NT24tgUJApZNDihEMWQRElzTW0BwDS6FD1DxxTm0XaOaZo6UguIHFSiuNwUYxWBxjPb5pKJ2TqeanjbFBq+eRyKk6oBAJFMogCJJaCeUk1kkueagDZbFUUaHQ2sV3AGndrHwOKVaaAMU/hC7RU3LZKS2FwYC1M0gxQu7AqGWU0OQLoIeYAd6FluV+aFkZ5H2R5Zz2Ueaki0i9nV2KrGi8lpDgH8VnySXs5KUukDXU4KOAQDsPJPHY968WsAsup2YYjD3CZ/8A0K9n17S1ttIvXS8jlfpPGVxjbkYPfzg14aH6VwCrYKvlT8EHIr0PAScZUaYQlFbPUJp2znn+1RCRmPNTw2zXunw39mTLbSpuL4xsbyp+DUKKKVpcqMck09mifmoZMMKIdeKHenoUBni70FImKaSY280DMO9UTOBG4qF+ancVCwqqYURGsrZXmsprCerelLKy0m4fT5ejLOriaF2QZVschT84qm+v3s5PUxisYo42RQJiowGkY7ifzzVqv9Pla9W8t3UNG/WUE84qraxpMs989/1Fnae456a49x714nhq5fJKXovGdCzTI4DqEUN4W6XV2SBe+M81d/UelRWHpmVNOZhbmQNyeccUNpNtaCXU11O3TaCWiJHk/f8AGg9UtNRkhltP2omFG3CIc+085rX83J8Uc5bEVrIBt7YpxCd0SMhB3MV/BplpPpNZbKSWce7pfu+cAtRlj6YxbyiZpUjYBgVU5yPj+lJklFJs7sgl9OXLac9ykqFgu7p/IqrpFHLMqTS9JG/xkcD81cbHSPUdta9aOZJIQpYxbtzfjHehYdHkv2M01hcohXcF6ZGT8VGEuLfJ69HXQZ6d9PWAh/4lY5j4kifcH/tQ2paEkV9ILXEcCjOM5GfIFMtJ9Nfse+ef9p2f4Y42wR+cU31K1Js4pY0bMhC4x8GoRzPnalaObtFJ0+xe8vTCGHtGT+Kh1OFYLkRJlsfqq+6dZx2cUkMaK0zEZcd80LrWiCKEz2yiRnYdQscleOP4VWGeLnQEnQp0rTdPv7OK4Od0Yw6duaB16G3tZUgs4wAw3MfinMtizW4itx05MAuFodbCeVV6sRPuI5HiljOpW5aOsq8mQdq81JDbs3Jq5w6LbK4LQncMZqe80aKXHSjIOe6jitP2YvQ1aKzp+5WAIp7HJhRxRFroTbiQM4/kaM/2Y4wpXms2TPGxowYvMpI4FcYZyAikk+PmnMOlYkBBVsDO35HzQ13qEGm7TeXNoJQxMfuA9vek+VvpBeNeziae10CNZLllEzrkMVzjj+VVvW/X6SREQo0cKDgtnb37fYoT1R6j0u8jY36Stk4WRUJU4wcH65715nf3UTo0qTDAfEcW7J2/P1Wrx/F+RXNFbS6GOveqf21SsSOu4/rJPA5/rVTLq25mbLfdTTtHtAxyee9CY+TXsYscYKooKdlm9Kep59IuTG0z/scxxKjEle2MkeeP6V6k9jaahp63OloqsMBUjJcyk9wPwOa8JDlTwcVaND9VappUdpEk7R2ydl8Ef3qHk+Py/KHYs4KSL9cadeQwmSW2lRAu4lkIwM4Gf40vaJsZxU1j/wD0FzaYlVHRUkBEqH35PYHtmitJvrLUwsSPCd0hUyD9QOM7eOG/hWXlOKfJGZ4kI7hSo5pe8gzg1ar3SmuUkksz141OCyfXcUmuPTt6oz02GfkfVNHNBurAsdIWbHkjaRFJRSAxx2zUBAr0D05ooGhXEFyoLXIZRxjBxkUi/wB2bneF6MnI77TgHHOTXQ8iMpuP6OcSssOa3Vuj9EXs8McsLKyuuSceayqPyMf7DwLe0FhHLDLNdOZJo8KU+Px/0NdTnRbFYOvIDHccpMexPb+GK8jg9XX3VWeaQmVOeoFG4/IzRCesrt0YXD74wSyqy7gp78ff+jWD6GToPFHqFldaPdowLo2FLbS2GbHn7BxUp1b08JplZUQqgTeW/Vu7D+QrzJPVNpewwi5iZbyFcRzgAEn7pZqWuS3kjERhQhDDancgY/hVIeHNasG1pHq9h6oje7FvJDCiRjdhXGC3jBPf5x9UVF6hjhLG+1OCVGkIQRkKVB593P1xXiI1u5SAwxSMquMOO4b7+jUEV4FlVpBvAGdv96p9KXtjptHrb+p9MS+aVAvW3AmZiXVecc/OPqorz1ynXhltr1+pHJiSNUGxhjG7yf8AzXlK3gDlgobC+36rc92sgUIpRtx5B4OarHxIVTGPV5vW1tA7y9SV2lIPQZcCM+QPJqEetJ79JOhEOmh93OeB24/14rzaKZ1uEN0ELbg3V3bif4irb/vFpqTLK+mS9TZhpYG27uefz/KpvwcXROb1SLTZ+o0kkD2kTM5/Urc4Yjv+OKYW91cMJG5lm3BJIEBBZSM5x4H3VDOvaePfZwSQknLFmO4gZ9uR455xU66ncanbpBbzuLwuGUgYKqAce4c5zjA/NQ+lGElSFUvRcJdVtdOkIiuIy24qVLckjwCf6V2PUM1vG8yQRyRsyGNWdSQD3yM5HY15bqtzLa604gDiVJQo3HIJ+eR85phdQahcwmXUJrf9pjfplVbLOAoJJwNvHfJPOaZ+DFbGuj0yb1JbRpHcXkARZQPfG2VB8g/eMdqIsdbmEIuJltwjsf2eKOXPUB84/pXiFnddK4DTjfEjds8MQOOKbWHqRre5F0vULCHp7Fkwnnvn4+q6XhN9BUnZ6pL6js/2qNwEW5ePqGNecY4O49hQF569iieRZbd12oAqbfc7nIwPjtXk15rTXUss8gIM7NuiUkImf+UDv80P1J5H6qsVi3KWC+0ZHAwPn+9PHwI/6ZRTZ6bpnqfWZtV/4iBreCYZYTe1lOPrkD+FU31VeiG5lV7pbh5WO9EcFY/d+kN5GPNINXmWe4kuU3BSfeplJIJP3QU92lw6u4O7HI71rx+Mo9Adscz3b2loLnpW0yXIMXSEm4wlccj80llvAple3QpHIMEn3EfWaGlmYjlztxwvOKHYnGAx+cEVqjEeMTbSOsu4gs3weaiIqXcdnvrgBm/SpNOOaX9Q8UYqwIrDqOTt4zxzQ6QOSCQB+a5l3bznk/NBgexiJ4WhKBZcIvHPBOPNTWV8be2TZGzSdTcdx9px4FKonaNg2c/H1U8UksZ2RuTz58UjiK1R6B6L124soJhO56UisQjAjac96f2frBJbcxyokkqHJkLDBXkc/HmvNrXVJZbsGSUwouMYc5GPg+O5ri7vbaG4DRGV8DguACPxisWTw4zk2Tf6PXbv1DbywRmzntUTALguCU7Dd996Fk9WxGySzluI1l3e+WUlVkjOe2OSa8sbU0cOzRqJZSMlRhV+eKHGozG7ElxM00aNkB2/kKnD+PUdiqLaPZINeWzQxWkTTwE7kYOi4BHbBPFZXilxqLzTySuMl23cHtWVz/jU9sPxyN3EiS8hAG+qhBcD6otoEbBXOKLs7SN2GRXqcQOaSFG485BzRETkMxCGQYxgnFHT2B3+05H3UZtHjII8UKF+aIEVdCWZeO3NbjI3HcCwomcdTOc1FFbMz4BNdobmjqKEyExptG7AAbxROoaZcWMaylo//q2a1+yOik5zxQ8iTSHDMx/NFUJybfehjoFzGbqKO5AMf47firRrK2axL0888+0ZqiiKSBw47UyXU5EiVcbm+6nKD5WZ82GU5qUXoJiSJ7pRLmOJexC8j+9NLu5jjt4re2UR9MZDrwzZOeSOfiq891cSjnAHxit/tMuBu8UssVuy67Hr6z1IihhjM5YkSuMt28mtLfxRWqwlQSSN4xwTVcMpaQHkYo2yQyyLvPBNdwOmorYy1xrWW1V4I8Of1ADHNVp3IbaQRVm1QosCrEpJFKLTTJ72QezGaeqFxTil2CpeMFVML+7/AEnFFxXUku0SorIowNyij5PT7W65JoRoGQ8Gg6HeWPo02mCdTtzESc8nORQFxpDox2upGaaRTOnDGiYIlkbcxGKeLIz8iUNiG20aWVtruAoqSTSsSAIcjxVj3RxA+0Gg5J493HBqgkfLnJiefR3QAsQAa4hslQZU80/XEi5cjFAzpGhGDSuRb5ZNUxdLDwQSKClgw3HNOmjjZDzzQjQDJz3rjoZa0DwWyscEVuSzKk7Kze8bcDipY7lt3IpWM5T7RB0ZEGK4aEnDMKYPIG8VE4BHFcBZH7AChz3rFhZ22qOaIMTMeBTOwt1UhnXmiNPOoKxP/s+b4rKsjugb9NZS2Z/uS/QttlDKAfJpokaxxDaMVlZVH0NIElkYSYBqKeRj5rKyguifsCdiDxUtrI2+srKDL+g+Rj06C3nfWVlBdiro5uJG2UNDIzPg1lZTyKx6GERyK3IMisrKDJPsgRAW5phaDay4+a3WUgmZ/iGuM96b6UAjrtrKyi+jHjbJ9VkO0jA7fFVa5YgfxrdZU2aUBO5z3ou3dto5rdZTwFy9HM7tzzQTkkjmsrKaQMSJ4pG296DunbPesrKmi8f7EAlfb3rpZGPmsrKoirSJSAV5FD4AJrKyg+wQOsmpYue9ZWUQSCVA+KKQkDisrK4y5CCRjurKyspQro//2Q==" alt="" />
      
    // </div>
     <table   striped="columns"   className='table table-bordered border-dark ' >
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>
  )
}
