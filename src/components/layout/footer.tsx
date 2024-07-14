const Footer = () => {
  return (
    <footer className="bg-card text-white py-6 w-full">
      <div className="container mx-auto grid grid-cols-3 items-center">
        <div className="mb-4">
          <h2 className="text-xl font-bold">Contato</h2>
          <p>Email: contato@seusite.com</p>
          <p>Telefone: (XX) XXXX-XXXX</p>
        </div>
        <div className="justify-self-center">
          <p>&copy; {new Date().getFullYear()} Todos os direitos reservados.</p>
        </div>
        <div className="justify-self-end text-center">
          <h2 className="text-xl font-bold mb-2">Siga-nos</h2>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-white">
              <svg
                className="h-6 w-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM7.414 16.328c.727.03 1.025-.31 1.025-.88v-3.383c0-.686-.274-1.1-1.067-1.1-.835 0-1.432.544-1.432 1.377v3.183c0 .88.473 1.083 1.474.983zm1.588-6.457c.383-.019 1.03-.047 1.573-.069 1.198-.046 2.372-.116 3.5-.116 1.127 0 1.73.042 2.11.116.56.029 1.08.113 1.478.257.444.17.794.42 1.072.726.28.31.47.75.564 1.335.094.594.156 1.513.156 2.773v1.08c0 1.175-.021 2.064-.042 2.66-.021.598-.042.907-.328 1.224-.274.305-.621.527-1.018.663-.366.135-.822.21-1.364.21-.561 0-1.118-.079-1.672-.196-.544-.117-1.006-.264-1.397-.442-.39-.18-.724-.422-1.022-.73-.28-.31-.49-.722-.632-1.235-.142-.523-.194-1.372-.194-2.548V9.413c0-1.12.017-2.01.057-2.666.03-.653.103-1.13.232-1.42.128-.305.366-.525.74-.67.362-.145.878-.217 1.56-.236zm5.287 6.79v-3.636c0-.66.273-1.108 1.023-1.108.752 0 1.106.448 1.106 1.108v3.637c0 .65-.274 1.108-1.106 1.108-.75 0-1.023-.468-1.023-1.108zm4.274-6.846c.812 0 1.47-.658 1.47-1.47 0-.813-.658-1.47-1.47-1.47-.813 0-1.47.657-1.47 1.47 0 .812.658 1.47 1.47 1.47zm-.02 6.846c0 .65-.272 1.108-1.023 1.108-.752 0-1.104-.448-1.104-1.108v-3.636c0-.66.273-1.108 1.104-1.108.75 0 1.023.448 1.023 1.108v3.637z"
                />
              </svg>
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <svg
                className="h-6 w-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.062 15.774c.32.068.546-.098.546-.324v-9.38c0-.226-.223-.392-.546-.324L9.98 10.59c-.32-.068-.546.098-.546.324v6.187c0 .226.223.392.546.324l5.082-1.102zm1.49-10.448c.3-.03.548-.183.575-.47.06-.665.097-1.337-.035-2.002-.17-.99-.703-1.53-1.635-1.833-.473-.154-.957-.172-1.452-.078-.614.106-1.043.41-1.326.923-.44.994-.33 1.942.368 2.799.203.284.456.507.762.647.652.314 1.248.215 1.79-.287.28-.234.303-.465.22-.755-.11-.38-.358-.54-.72-.512-.57.048-.976.386-1.142.944-.157.548-.065 1.08.28 1.583.612 1.032 1.574 1.402 3.033 1.29.747-.058 1.398-.366 1.954-.916.525-.523.784-1.163.748-1.916-.032-.7-.277-1.274-.735-1.751-.506-.504-1.098-.722-1.785-.655-.628.07-1.065.383-1.309.927-.357.73-.227 1.429.378 2.088.334.355.728.595 1.17.713.666.185 1.278.06 1.826-.395.172-.148.336-.308.51-.472.268-.258.374-.532.317-.84-.051-.342-.253-.554-.609-.625-.697-.11-1.36.056-1.987.48-.8.58-1.128 1.428-.98 2.347.09.615.417 1.096 1.01 1.425.707.39 1.457.443 2.262.164.71-.271 1.132-.773 1.244-1.524.113-.765-.074-1.422-.556-1.963-.474-.53-1.163-.78-2.086-.747-.708.024-1.295.273-1.782.75-.464.45-.67.97-.606 1.563.083.87.605 1.495 1.507 1.855.947.375 1.91.347 2.89-.086.773-.357 1.23-.875 1.372-1.635.168-.857-.066-1.593-.69-2.204-.52-.494-1.22-.734-2.1-.71-.71.022-1.293.24-1.806.657-.504.408-.82.908-.952 1.51-.1.488-.027.963.202 1.414.28.6.725.978 1.364 1.134.707.16 1.39-.013 2.047-.503z"
                />
              </svg>
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <svg
                className="h-6 w-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1.883-12.488c-.37-.124-.778-.198-1.183-.198-.405 0-.813.074-1.183.198C11.465 6.461 11 7.298 11 8.25s.465 1.789 1.7 2.238c.37.124.778.198 1.183.198.405 0 .813-.074 1.183-.198 1.235-.449 1.7-1.286 1.7-2.238s-.465-1.789-1.7-2.238zm-1.7 3.328c-.552 0-1-.448-1-1 0-.553.448-1 1-1s1 .447 1 1c0 .552-.448 1-1 1zM12 16.113c-2.18 0-3.957-.742-4.95-2.075a.667.667 0 01.222-.916c.253-.166.602-.093.802.16.908 1.237 2.548 1.992 4.033 1.992 1.485 0 3.125-.755 4.033-1.992.2-.253.55-.326.802-.16a.667.667 0 01.222.916c-.993 1.333-2.77 2.075-4.95 2.075zm6.638-3.465c-.405 0-.813.074-1.183.198-1.235.449-1.7 1.286-1.7 2.238s.465 1.789 1.7 2.238c.37.124.778.198 1.183.198.405 0 .813-.074 1.183-.198C18.535 14.789 19 13.952 19 13s-.465-1.789-1.7-2.238c-.37-.124-.778-.198-1.183-.198zm-1.183-.198c-.37-.124-.778-.198-1.183-.198s-.813.074-1.183.198C9.465 12.211 9 13.048 9 14s.465 1.789 1.7 2.238c.37.124.778.198 1.183.198.405 0 .813-.074 1.183-.198C13.535 15.789 14 14.952 14 14s-.465-1.789-1.7-2.238zM12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };