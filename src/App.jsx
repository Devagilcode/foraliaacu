import { useEffect, useRef, useState } from "react";
import "./App.css";

function Nailong() {
  return (
    <div className="nailong-wrapper">
      <video
        src="/nailong.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="nailong-video"
      />
    </div>
  );
}


function App() {
  const [started, setStarted] =
    useState(false);

  const [letterOpen, setLetterOpen] =
    useState(false);

  const musicRef = useRef(null);


  /*
    ==========================
    MULAI WEBSITE
    ==========================
  */

  const startWebsite = async () => {
    const music =
      musicRef.current;

    try {
      if (music) {
        music.volume = 0.35;

        await music.play();
      }
    } catch (error) {
      console.log(
        "Musik gagal autoplay:",
        error
      );
    }

    setStarted(true);
  };


  /*
    ==========================
    PREVENT SCROLL SAAT OPENING
    ==========================
  */

  useEffect(() => {
    if (!started) {
      document.body.style.overflow =
        "hidden";
    } else {
      document.body.style.overflow =
        "auto";
    }

    return () => {
      document.body.style.overflow =
        "auto";
    };
  }, [started]);


  return (
    <div className="website">

      {/* ==========================
          MUSIC
      ========================== */}

      <audio
        ref={musicRef}
        src="/music.mp3"
        loop
        preload="auto"
      />


      {/* ==========================
          OPENING SCREEN
      ========================== */}

      {!started && (
        <div className="opening">

          <div className="opening-hearts">
            <span>♡</span>
            <span>💗</span>
            <span>♡</span>
            <span>💗</span>
            <span>♡</span>
          </div>

          <div className="opening-card">

            <div className="opening-heart">
              💌
            </div>

            <p className="opening-small">
              ada sesuatu buat kamu...
            </p>

            <h1>
              Hai,
              <br />
              <span>Aliaa</span>
            </h1>

            <p className="opening-text">
              Aku punya sedikit pesan
              yang ingin aku sampaikan.
            </p>

            <button
              className="enter-button"
              onClick={startWebsite}
            >
              Buka untukku ♡
            </button>

            <p className="opening-note">
              🎵 nyalakan volume ya
            </p>

          </div>

        </div>
      )}


      {/* ==========================
          MAIN WEBSITE
      ========================== */}

      {started && (
        <>

          {/* FLOATING HEARTS */}

          <div className="floating-hearts">

            {Array.from({
              length: 30,
            }).map((_, index) => (
              <span
                key={index}
                style={{
                  "--i": index,
                }}
              >
                {index % 3 === 0
                  ? "♡"
                  : "💗"}
              </span>
            ))}

          </div>


          <main className="main">

            {/* HEADER */}

            <div className="top-label">
              A LITTLE MESSAGE FOR YOU ♡
            </div>

            <h1 className="title">
              Hai,
              <span> Aliaa</span>
              🤍
            </h1>

            <p className="subtitle">
              Jangan bilang aku cerewet ya...
              <br />
              aku cuma peduli sama kamu.
            </p>


            {/* ======================
                PHOTO
            ====================== */}

            <section className="photo-section">

              <div className="tape"></div>

              <div className="photo-card">

                <img
                  src="/doi.jpg"
                  alt="Foto doi"
                />

                <div className="photo-caption">
                  ♡ my favorite person ♡
                </div>

              </div>

            </section>


            {/* ======================
                NAILONG
            ====================== */}

            <section className="nailong-section">

              <div className="speech-bubble">

                Jangan begadang terus yaa 🥺

                <br />

                <strong>
                  Jaga kesehatan kamu.
                </strong>

              </div>

              <Nailong />

            </section>


            {/* ======================
                SHORT MESSAGE
            ====================== */}

            <section className="message-card">

              <div className="message-icon">
                🌷
              </div>

              <h2>
                Sedikit pengingat
              </h2>

              <p>
                Jangan terlalu sering
                begadang ya.
              </p>

              <p>
                Aku tahu kadang malam
                bisa jadi waktu paling
                ramai buat pikiran.
              </p>

              <p>
                Tapi jangan setiap malam
                berperang sendirian dengan
                isi pikiranmu sendiri.
              </p>

              <p className="highlight">
                Kamu juga berhak istirahat.
                🤍
              </p>

            </section>


            {/* ======================
                LETTER BUTTON
            ====================== */}

            <button
              className="letter-button"
              onClick={() =>
                setLetterOpen(true)
              }
            >
              💌 Buka surat kecil
            </button>


            {/* ======================
                FOOTER
            ====================== */}

            <p className="footer">
              dibuat dengan kode,
              doa, dan sedikit rasa ♡
            </p>

          </main>


          {/* ==========================
              LETTER MODAL
          ========================== */}

          {letterOpen && (

            <div
              className="modal"
              onClick={() =>
                setLetterOpen(false)
              }
            >

              <div
                className="letter"
                onClick={(event) =>
                  event.stopPropagation()
                }
              >

                <button
                  className="close-button"
                  onClick={() =>
                    setLetterOpen(false)
                  }
                >
                  ×
                </button>


                <div className="letter-top">
                  💗
                </div>


                <h2>
                  Untuk kamu
                </h2>


                <div className="letter-divider">
                </div>


                <p>
                  Aku sebenarnya nggak
                  pandai merangkai kata.
                </p>

                <p>
                  Jadi aku cuma mau bilang
                  sesuatu yang sederhana.
                </p>


                <p className="strong-text">
                  Tolong jaga kesehatan
                  kamu ya.
                </p>


                <p>
                  Jangan terlalu sering
                  begadang hanya karena
                  belum bisa membuat
                  pikiranmu tenang.
                </p>


                <p>
                  Aku tahu ada malam-malam
                  ketika kepala terasa penuh.
                </p>


                <p>
                  Ada banyak hal yang
                  mungkin kamu pikirkan
                  sendirian.
                </p>


                <p>
                  Tapi jangan setiap malam
                  kamu berperang sendiri
                  dengan isi pikiranmu.
                </p>


                <p>
                  Kalau capek,
                  istirahatlah.
                </p>


                <p>
                  Kalau sedih,
                  nggak apa-apa menangis.
                </p>


                <p>
                  Kalau semuanya terasa
                  terlalu berat,
                  kamu nggak harus selalu
                  terlihat kuat.
                </p>


                <p>
                  Makan yang cukup.
                  Minum air.
                  Tidur yang cukup.
                  Jangan lupa tersenyum.
                </p>


                <p>
                  Karena ada seseorang
                  yang selalu berharap
                  kamu baik-baik saja.
                </p>


                <div className="signature">

                  Jangan lupa jaga diri
                  ya, Aliaa. 🤍

                  <br />

                  <span>
                    — seseorang yang
                    Aliaa kamu
                  </span>

                </div>


                <div className="letter-nailong">
                  🦕💗
                </div>

              </div>

            </div>

          )}

        </>
      )}

    </div>
  );
}

export default App;