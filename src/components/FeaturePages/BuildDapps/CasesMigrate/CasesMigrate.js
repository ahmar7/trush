import React from "react";

const CasesMigrate = () => {
  return (
    <section className="cases-migrate">
      <div className="wrapper">
        <div className="cases-migrate__content">
          <h2 className="main__title jss170 desk0c">
            Effortless Migration with Trush
          </h2>
          <p className="main__text">
            Trush's Ethereum Virtual Machine (EVM), the Trush Virtual Machine
            (TVM), simplifies migration from Ethereum to Trush. Ensuring
            superior performance, enhanced security, and unrivaled
            compatibility, TVM is designed to support the demands of modern
            DApps while maintaining seamless interoperability with Ethereum.
          </p>

          <a
            target="_blank"
            href="https://trush-foundation.gitbook.io/trush-network/solutions-and-technology/unleashing-the-potential-with-trush-virtual-machine-tvm"
            className="main-arrow-link"
          >
            Learn more about TVM
            <svg
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.6953 3.93057L17.3203 9.55557C17.4358 9.67503 17.5004 9.8347 17.5004 10.0009C17.5004 10.1671 17.4358 10.3267 17.3203 10.4462L11.6953 16.0712C11.5739 16.1709 11.4197 16.2218 11.2628 16.2141C11.1059 16.2064 10.9575 16.1406 10.8464 16.0295C10.7353 15.9184 10.6695 15.77 10.6618 15.6131C10.6541 15.4562 10.705 15.302 10.8047 15.1806L15.3672 10.6259H3.125C2.95924 10.6259 2.80027 10.56 2.68306 10.4428C2.56585 10.3256 2.5 10.1666 2.5 10.0009C2.5 9.83512 2.56585 9.67615 2.68306 9.55894C2.80027 9.44173 2.95924 9.37588 3.125 9.37588H15.3672L10.8047 4.82119C10.705 4.69976 10.6541 4.54559 10.6618 4.38868C10.6695 4.23178 10.7353 4.08334 10.8464 3.97226C10.9575 3.86118 11.1059 3.79538 11.2628 3.78767C11.4197 3.77997 11.5739 3.8309 11.6953 3.93057V3.93057Z"
                fill="#0C0C0C"
              />
            </svg>
          </a>
        </div>
        <img
          data-src="https://velas.com/assets/img/cases/light/migrate.webp"
          data-theme-src="https://velas.com/assets/img/cases/dark/migrate.webp"
          data-rjd={2}
          alt="migrate"
          className="cases-migrate__img lozad"
          src="https://velas.com/assets/img/cases/light/migrate.webp"
          data-loaded="true"
        />{" "}
      </div>
    </section>
  );
};

export default CasesMigrate;
