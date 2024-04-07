import React from "react";

const Footer = () => {
  return (
    <footer className="md:p-5">
      <img className="h-52 w-52" src="paypal.png" alt="" />
      <div className="md:flex justify-between items-center hidden">
        <div className="flex text-sm lg:text-lg gap-4 font-bold">
          <span>Help</span>
          <span>Contact</span>
          <span>Fees</span>
          <span>Security</span>
          <span>Apps</span>
          <span>Shop</span>
          <span>Enterprise</span>
          <span>Patners</span>
          <span>Feedback</span>
        </div>
        <div>
          <svg
            className="w-10 h-10"
            enableBackground="new 0 0 512 512"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="256" cy="256" fill="#f0f0f0" r="256" />
            <g fill="#d80027">
              <path d="m244.87 256h267.13c0-23.106-3.08-45.49-8.819-66.783h-258.311z" />
              <path d="m244.87 122.435h229.556c-15.671-25.572-35.708-48.175-59.07-66.783h-170.486z" />
              <path d="m256 512c60.249 0 115.626-20.824 159.356-55.652h-318.712c43.73 34.828 99.107 55.652 159.356 55.652z" />
              <path d="m37.574 389.565h436.852c12.581-20.529 22.338-42.969 28.755-66.783h-494.362c6.417 23.814 16.174 46.254 28.755 66.783z" />
            </g>
            <path
              d="m118.584 39.978h23.329l-21.7 15.765 8.289 25.509-21.699-15.765-21.699 15.765 7.16-22.037c-19.106 15.915-35.852 34.561-49.652 55.337h7.475l-13.813 10.035c-2.152 3.59-4.216 7.237-6.194 10.938l6.596 20.301-12.306-8.941c-3.059 6.481-5.857 13.108-8.372 19.873l7.267 22.368h26.822l-21.7 15.765 8.289 25.509-21.699-15.765-12.998 9.444c-1.301 10.458-1.979 21.11-1.979 31.921h256c0-141.384 0-158.052 0-256-50.572 0-97.715 14.67-137.416 39.978zm9.918 190.422-21.699-15.765-21.699 15.765 8.289-25.509-21.7-15.765h26.822l8.288-25.509 8.288 25.509h26.822l-21.7 15.765zm-8.289-100.083 8.289 25.509-21.699-15.765-21.699 15.765 8.289-25.509-21.7-15.765h26.822l8.288-25.509 8.288 25.509h26.822zm100.115 100.083-21.699-15.765-21.699 15.765 8.289-25.509-21.7-15.765h26.822l8.288-25.509 8.288 25.509h26.822l-21.7 15.765zm-8.289-100.083 8.289 25.509-21.699-15.765-21.699 15.765 8.289-25.509-21.7-15.765h26.822l8.288-25.509 8.288 25.509h26.822zm0-74.574 8.289 25.509-21.699-15.765-21.699 15.765 8.289-25.509-21.7-15.765h26.822l8.288-25.509 8.288 25.509h26.822z"
              fill="#0052b4"
            />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
          </svg>
        </div>
      </div>
      <div className="border mt-5 hidden md:block"></div>
      <div className="lg:flex hidden justify-between items-center mt-5">
        <div className="flex gap-4 font-bold">
          <span>About</span>
          <span>Newsroom</span>
          <span>Jobs</span>
          <span>Investor Relations</span>
          <span>Values in Action</span>
          <span>Public Policy</span>
          <span>Sitemap</span>
        </div>
        <div className="flex gap-4 font-bold">
          <span className="text-gray-500 font-normal">&copy; 1999-2022</span>
          <span>Accessibility</span>
          <span>Privacy</span>
          <span>Cookies</span>
          <span>Legal</span>
        </div>
      </div>
      <center>
        <div className="lg:w-9/12 text-left md:mt-10 lg:mt-28 flex flex-col gap-8">
          <p>
            ¹ Direct Deposit is subject to the payor's support of this feature.
            Funds deposited via Direct Deposit will generally be available on
            the day we receive the funds transfer. You may review activity on
            your periodic statements or transaction history on www.PayPal.com,
            or call Customer Service at 1-888-221-1161 to verify receipt. We
            reserve the right to accept, reject, or limit transfers via Direct
            Deposit in our sole discretion. If you wish to cancel Direct
            Deposits, you must contact your employer. PayPal does not charge any
            fee to set up or maintain Direct Deposit. Refer to your PayPal User
            Agreement for complete Direct Deposit details.
          </p>
          <p>
            Once it's set up, Direct Deposit usually takes two (2) pay cycles to
            begin, but can vary across employers. Please check with your
            employer for specific timing.
          </p>
          <p>
            ² New Direct Deposit enrollees will be eligible for early access,
            subject to the terms and conditions. The early access feature will
            be made available to all eligible Direct Deposit customers in the
            coming months. Early access can allow a user to access their funds
            up to 2 days early. Early access to funds depends on when we get
            payment instructions from the payor (your employer or government
            agency). When we get funds before the scheduled payment date, your
            money can be made available up to 2 days sooner than scheduled.
            Availability and timing can vary based on the payor and when we get
            payment instructions. Once the funds are received, they will be
            deposited directly into your PayPal balance.
          </p>
          <p>
            ³ Up to $4.95 cash reload fee applies. This service fee is to add
            cash into your PayPal Balance account.
          </p>
          <p>
            ⁴ The PayPal Cash Card is a debit card linked to your PayPal Balance
            account. The PayPal Cash Card is not a credit card. PayPal is not a
            bank and does not itself take deposits. You will not receive any
            interest on the funds in your PayPal Balance account. Cash funds
            held in a PayPal Balance account are not eligible for FDIC
            pass-through insurance coverage unless you have a PayPal Cash Card,
            or have enrolled in Direct Deposit, or have bought cryptocurrency.
            If your PayPal Balance account is eligible for FDIC pass-through
            insurance, PayPal will deposit your cash funds into one or more
            custodial accounts maintained for the benefit of eligible customers
            at one or more FDIC-insured banks. Funds in these custodial accounts
            are eligible for pass- through FDIC insurance coverage up to
            applicable limits. See the{" "}
            <span className="text-blue-500 font-bold cursor-pointer">
              PayPal Balance Terms and Conditions
            </span>{" "}
            for additional information.
          </p>
          <p>
            The PayPal Cash Mastercard ("PayPal Cash Card") is issued by The
            Bancorp Bank pursuant to a license by Mastercard International
            Incorporated. Mastercard is a registered trademark, and the circles
            design is a trademark, of Mastercard International Incorporated. The
            Bancorp Bank is issuer of the Card only and not responsible for the
            associated accounts or other products, services or offers from
            PayPal. Card may be used everywhere Mastercard is accepted. The
            Bancorp Bank does not hold your PayPal Balance account funds.
          </p>
          <p>
            ⁵ The Cash a Check feature is a service provided by First Century
            Bank, N.A. and Ingo Money, Inc., subject to the First Century Bank
            and Ingo Money Terms and Conditions and Privacy Policy. Fees and
            terms apply. All checks subject to review for approval. Unapproved
            checks will not be funded to your account. For more details, see the{" "}
            <span className="text-blue-500 font-bold cursor-pointer">
              terms and conditions.
            </span>
          </p>
          <p>
            ⁶ As of July 28, 2022, the annual percentage yield (APY) for PayPal
            Savings is 1.65%. This is a variable rate and can change at any
            time, including after the account is opened. Banking services
            provided by Synchrony Bank, Member FDIC.
          </p>
          <p>
            ⁷ PayPal Balance account required. When you buy or sell
            cryptocurrency, including when you check out with crypto, we will
            disclose an exchange rate and any fees you will be charged for that
            transaction. The exchange rate includes a spread that PayPal earns
            on each purchase and sale.{" "}
            <span className="text-blue-500 font-bold cursor-pointer">
              See cryptocurrency fees.
            </span>
          </p>
          <p>
            Buying, selling, and holding cryptocurrencies is not regulated in
            many states, including the State of California. PayPal, Inc. is
            licensed to engage in virtual currency business activity by the New
            York State Department of Financial Services. Buying, selling, and
            holding cryptocurrency with PayPal is not available in Hawaii and
            where prohibited by law.
          </p>
          <p>
            Buying and selling cryptocurrency is subject to a number of risks
            and may result in significant losses. Please see our disclosure here
            for more details. PayPal does not make any recommendations regarding
            buying or selling cryptocurrency. Consider seeking advice from your
            financial and tax advisor. All custody of and buying and selling in
            cryptocurrency is performed for PayPal by its licensed service
            provider, Paxos Trust Company, LLC.
          </p>
        </div>
      </center>
    </footer>
  );
};

export default Footer;
