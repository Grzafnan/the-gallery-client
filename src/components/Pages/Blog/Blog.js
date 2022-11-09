import React from 'react';
import useTitle from '../../../hooks/useTitle';

const Blog = () => {

  useTitle('Blog');

  return (
    <div>
      <div className="lg:px-20 md:px-6 px-4 py-12">
        <div className="flex flex-col items-center justify-center">
          <h1 className="lg:text-4xl text-3xl font-bold text-center text-gray-800">Blogs</h1>
        </div>
        <div className="w-full lg:flex items-center gap-6 mt-10">
          <div className="lg:w-1/2">
            <div className="bg-white border rounded-md border-gray-200 relative sm:p-10 p-6">
              <div>
                <h3 className='text-xl font-semibold'>
                  What's Difference between SQL and NoSQL?
                </h3>
              </div>
              <p className="text-base leading-6 text-gray-600 mt-4">SQL databases are primarily called RDBMS or Relational Databases. NoSQL databases are primarily called as Non-relational or distributed database. Structured query language (SQL).NoSQL databases No declarative query language. SQL databases are table based databases,NoSQL databases can be document based, key-value pairs, graph databases.SQL databases have a predefined schema, and NoSQL databases use dynamic schema for unstructured data.</p>
              <div className="absolute bottom-0 -mb-4 ml-10">
                <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonials-4-svg2.svg" alt="sharp" />
              </div>
            </div>
            <div className="flex items-center mt-7">
              <div className="w-12 h-12 border border-indigo-700 rounded-full flex items-center justify-center">
                <img src="https://i.ibb.co/wym7KkS/image.jpg" className="w-10 h-10 rounded-full" alt="profile" />
              </div>
              <div className="flex flex-col items-start ml-4">
                <p className="text-base font-semibold leading-4 text-gray-800">Shakil Ahmmed</p>
                <p className="text-base leading-4 mt-2 text-center text-gray-600">Web Developer</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 lg:mt-0 mt-16">
            <div className="bg-white border rounded-md border-gray-200 relative sm:p-10 p-6">
              <div>
                <h3 className='text-xl font-semibold'>
                  What is JWT, and how does it work?
                </h3>
              </div>
              <p className="text-base leading-6 text-gray-600 mt-4">JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object.It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP). So the integrity and authenticity of the token can be verified by other parties involved.The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted.JWT is a token based stateless authentication mechanism. </p>
              <div className="absolute bottom-0 -mb-4 ml-10">
                <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonials-4-svg2.svg" alt="sharp" />
              </div>
            </div>
            <div className="flex items-center mt-7">
              <div className="w-12 h-12 border border-indigo-700 rounded-full flex items-center justify-center">
                <img src="https://i.ibb.co/wym7KkS/image.jpg" className="w-10 h-10 rounded-full" alt="profile" />
              </div>
              <div className="flex flex-col items-start ml-4">
                <p className="text-base font-semibold leading-4 text-gray-800">Shakil Ahmmed</p>
                <p className="text-base leading-4 mt-2 text-center text-gray-600">Web Developer</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:flex items-center gap-6 mt-10">
          <div className="lg:w-1/2">
            <div className="bg-white border rounded-md border-gray-200 relative sm:p-10 p-6">
              <div>
                <h3 className='text-xl font-semibold'>
                  What's the difference between javascript and NodeJS?
                </h3>
              </div>
              <p className="text-base leading-6 text-gray-600 mt-4">
                <strong>NodeJS :</strong>  NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development.
                <br />
                <strong>JavaScript :</strong>  Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance. </p>
              <div className="absolute bottom-0 -mb-4 ml-10">
                <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonials-4-svg2.svg" alt="sharp" />
              </div>
            </div>
            <div className="flex items-center mt-7">
              <div className="w-12 h-12 border border-indigo-700 rounded-full flex items-center justify-center">
                <img src="https://i.ibb.co/wym7KkS/image.jpg" className="w-10 h-10 rounded-full" alt="profile" />
              </div>
              <div className="flex flex-col items-start ml-4">
                <p className="text-base font-semibold leading-4 text-gray-800">Shakil Ahmmed</p>
                <p className="text-base leading-4 mt-2 text-center text-gray-600">Web Developer</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 lg:mt-0 mt-16">
            <div className="bg-white border rounded-md border-gray-200 relative sm:p-10 p-6">
              <div>
                <h3 className='text-xl font-semibold'>
                  How does NodeJS handle multiple requests at the same time?
                </h3>
              </div>
              <p className="text-base leading-6 text-gray-600 mt-4">NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.

                If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module. </p>
              <div className="absolute bottom-0 -mb-4 ml-10">
                <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonials-4-svg2.svg" alt="sharp" />
              </div>
            </div>
            <div className="flex items-center mt-7">
              <div className="w-12 h-12 border border-indigo-700 rounded-full flex items-center justify-center">
                <img src="https://i.ibb.co/wym7KkS/image.jpg" className="w-10 h-10 rounded-full" alt="profile" />
              </div>
              <div className="flex flex-col items-start ml-4">
                <p className="text-base font-semibold leading-4 text-gray-800">Shakil Ahmmed</p>
                <p className="text-base leading-4 mt-2 text-center text-gray-600">Web Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;