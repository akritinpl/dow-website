function Contact() {
  return (
    <footer className="bg-gray-100 text-center py-8 mt-12 text-sm text-[--color-text]">

      <div className="max-w-4xl mx-auto px-4">

        <h3 className="text-lg font-semibold mb-4 text-[--color-primary]">Contact Us</h3>

        <address className="not-italic space-y-2 text-[--color-text]">
          <p><strong>Address:</strong> Shankhamul, Kathmandu 31 Kathmandu, Bagmati Nepal 44600</p>
          <p>
            <strong>Email:</strong>{' '}
            <a href="hq@downepal.com" className="text-[--color-secondary] underline hover:text-yellow-700">
            hq@downepal.com
            </a>
          </p>
        </address>

        <div className="mt-6 space-x-6">
          <a
            href="https://www.facebook.com/downepal"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[--color-secondary]"
          >
            Facebook
          </a>

          <a
            href="https://www.instagram.com/dow.nepal/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[--color-secondary]"
          >
            Instagram
          </a>

          <a
            href="https://www.linkedin.com/company/downepal/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[--color-secondary]"
          >
            LinkedIn
          </a>
          
          <a
            href="mailto:hq@downepal.com"
            className="hover:text-[--color-secondary]"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Contact;