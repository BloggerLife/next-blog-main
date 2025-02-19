import { Button } from "flowbite-react";
export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-[#FF492E] justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl">Want to join our Facebook Community?</h2>
        <p className="text-gray-500 my-2">
          Connect with other members all over the World!
        </p>
        <Button
          gradientDuoTone="purpleToPink"
          className="rounded-tl-xl rounded-bl-none"
        >
          <a
            href="https://www.facebook.com/share/16AHCCbNgC/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
          >
            WesayBlog Facebok Page
          </a>
        </Button>
      </div>
      <div className="p-7 flex-1">
        <img src="https://firebasestorage.googleapis.com/v0/b/wesayblog-78349.appspot.com/o/Blue%20and%20Pink%20Collage%20Travel%20Blog%20Banner.png?alt=media&token=c74ba6ae-a44b-4b5e-a62d-6b9a91a219fb" />
      </div>
    </div>
  );
}
