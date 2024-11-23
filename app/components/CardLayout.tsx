import Image from "next/image"

export default function GovernorCardLayout() {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <div className="flex-1 bg-white rounded-lg shadow-md p-4">
          <Image
            src="/2.4.jpg"
            alt="Descriptive Alt Text"
            width={500}
            height={300}/>

        </div>
        <div className="flex-1 bg-white rounded-lg shadow-md p-4">
        <Image
            src="/2.3.jpg"
            alt="Descriptive Alt Text"
            width={500}
            height={500}/>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 bg-white rounded-lg shadow-md p-4">
        <Image
            src="/1.1.jpg"
            alt="Descriptive Alt Text"
            width={500}
            height={300}/>
        </div>
        <div className="flex-1 bg-white rounded-lg shadow-md p-4">
        <Image
            src="/1.2.jpg"
            alt="Descriptive Alt Text"
            width={500}
            height={300}/>
        </div>
        <div className="flex-1 bg-white rounded-lg shadow-md p-4">
        <Image
            src="/1.3.jpg"
            alt="Descriptive Alt Text"
            width={500}
            height={300}/>
        </div>
      </div>
    </div>
  )
}

