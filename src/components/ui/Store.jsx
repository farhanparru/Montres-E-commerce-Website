import React from 'react'

const Store = () => {
  return (
    <div>
           {/* UAE Location Section */}
            <section className="bg-gray-100 py-12">
              <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                    <h3 className="text-2xl font-serif text-gray-800 mb-4">
                      Visit Our <span className="text-amber-600">Dubai</span> Showroom
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Experience our luxury collections in person at our flagship showroom in Dubai.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <FaMapMarkerAlt className="text-amber-600 mt-1 mr-3" />
                        <div>
                          <p className="font-medium">Sheikh Zayed Road</p>
                          <p className="text-gray-600 text-sm">Dubai, United Arab Emirates</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <FaPhoneAlt className="text-amber-600 mt-1 mr-3" />
                        <div>
                          <p className="font-medium">+971 4 223 3445</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <FaEnvelope className="text-amber-600 mt-1 mr-3" />
                        <div>
                          <p className="font-medium">info@dubailuxurystore.ae</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/2 h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.178509825064!2d55.27218751500882!3d25.19751498389619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a67e24b%3A0xff45e502e1ceb7e2!2sBurj%20Khalifa!5e0!3m2!1sen!2sae!4v1620000000000!5m2!1sen!2sae" 
                      width="100%" 
                      height="100%" 
                      style={{border:0}} 
                      allowFullScreen="" 
                      loading="lazy"
                      title="Dubai Luxury Store Location"
                    ></iframe>
                  </div>
                </div>
              </div>
            </section>
    </div>
  )
}

export default Store
