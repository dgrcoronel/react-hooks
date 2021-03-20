import React, { useEffect, useState } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

//   Ex #02
function calcFatorial(num) {
  const n = parseInt(num);
  if (n < 0) return -1;
  if (n === 0) return 1;
  return calcFatorial(n - 1) * n;
}

function verificaParImpar(num) {
  return num % 2 === 0 ? true : false;
}

const UseEffect = (props) => {
  const [number, setNumber] = useState(1);
  const [fatorial, setFatorial] = useState(1);

  useEffect(
    function () {
      setFatorial(calcFatorial(number));
    },
    [number]
  );

  useEffect(
    function () {
      if (fatorial > 1000000) {
        document.title = "Eita!!!";
      }
    },
    [fatorial]
  );

  //   Ex #02
  const [number2, setNumber2] = useState(1);
  const [status, setStatus] = useState("Ímpar");

  useEffect(
    function () {
      setStatus(verificaParImpar(number2));
    },
    [number2]
  );

  return (
    <div className="UseEffect">
      <PageTitle
        title="Hook UseEffect"
        subtitle="Permite executar efeitos colaterais em componentes funcionais!"
      />
      <SectionTitle title="Exercício #01" />
      <div className="center">
        <div>
          <span className="text">Fatorial: </span>
          <text className="text red">
            {fatorial === -1 ? "Não existe" : fatorial}
          </text>
        </div>
        <input
          type="number"
          className="input"
          min="1"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>
      <SectionTitle title="Exercício #02" />
      <div className="center">
        <div>
          <span className="text">Status: </span>
          <text className="text red">{status === true ? "Par" : "Ímpar"}</text>
        </div>
        <input
          type="number"
          className="input"
          min="1"
          value={number2}
          onChange={(e) => setNumber2(e.target.value)}
        />
      </div>
    </div>
  );
};

export default UseEffect;
