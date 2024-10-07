
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="https://flowbite.com/" className="flex items-center">
            <span className="text-2xl font-bold ml-2">Empowerful LLC</span>
             
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div className='mr-10 '>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Services Offer</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link href="/services" className="hover:underline">Academic Coaching</Link>
                </li>
                <li>
                  <Link href="/services" className="hover:underline">IEP Support</Link>
                </li>
                <li>
                  <Link href="/services" className="hover:underline">SEL Support</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="https://www.facebook.com/login.php?skip_api_login=1&api_key=310252789037855&kid_directed_site=0&app_id=310252789037855&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv2.6%2Fdialog%2Foauth%3Fclient_id%3D310252789037855%26redirect_uri%3Dhttps%253A%252F%252Ftt.teamtailor.com%252Fauth%252Ffacebook_apply%252Fcallback%26response_type%3Dcode%26scope%3Demail%252Cpublic_profile%26state%3D43269b1c387be40abb26ce626b00c7627484025abae1466b%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3D9c9d27b8-19a8-4226-95f3-456095d244d3%26tp%3Dunspecified&cancel_url=https%3A%2F%2Ftt.teamtailor.com%2Fauth%2Ffacebook_apply%2Fcallback%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D43269b1c387be40abb26ce626b00c7627484025abae1466b%23_%3D_&display=page&locale=en_GB&pl_dbl=0" className="hover:underline">FaceBook</a>
                </li>
                <li>
                  <a href="https://www.tiktok.com/following" className="hover:underline">Tiktok</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Terms & Conditions</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023 <a href="https://flowbite.com/" className="hover:underline">Empowerful LLC</a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            {/* Social icons */}
            <Link href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd"/>
              </svg>
              <span className="sr-only">Facebook page</span>
            </Link>
             </div>
 </div>
 </footer>

)}

export default Footer