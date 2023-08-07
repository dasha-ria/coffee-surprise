export default function Confirmation() {
  return (
    <div className="pt-32 pl-4 md:pl-8">
      <h2 className="text-xl font-bold mb-4">Thank you for your order!</h2>
      <p>
        We're delighted to tell you that we have received your order #num{" "}
        <br></br> and our coffee experts are already roasting the beans to
        perfection.
      </p>
      <p className="mt-4">
        A confirmation email has been sent to <span>text@gmail.com</span>.
      </p>
      <p></p>
    </div>
  );
}
