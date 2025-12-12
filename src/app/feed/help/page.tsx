"use client";
import React from "react";

export default function HelpPage() {
  return (
    <>
      <main className="max-w-4xl mx-auto py-12 px-6">
        <article className="prose prose-lg mx-auto prose-headings:font-serif prose-p:font-sans">
          <h1 className="font-serif text-4xl leading-tight tracking-tight">
            What this whole thing is about ? <br />
          </h1>

          <p className="font-sans text-lg leading-relaxed">
            well... the way this all started was very simple.
          </p>

          <p className="font-sans text-lg leading-relaxed">
            we were given a problem statement:
          </p>

          <blockquote className="font-sans italic pl-4 border-l-2">
            "build a low-cost, camera-based automated mapping system that
            estimates sand grain size distribution and classifies beaches, with
            GNSS/GPS integration."
          </blockquote>

          <p className="font-sans text-lg leading-relaxed">
            sounds simple right?
          </p>

          <p className="font-sans text-lg leading-relaxed">
            except it absolutely isn't.
          </p>

          <p className="font-sans text-lg leading-relaxed">
            we were supposed to measure sand grain size, identify whether it's
            fine, medium or coarse...
          </p>

          <p className="font-sans text-lg leading-relaxed">
            but we ended up making an entire mini{" "}
            <strong className="font-semibold">
              mathematical station for computation
            </strong>
            , because just calculating D10/D50 wasn't enough.
          </p>

          <p className="font-sans text-lg leading-relaxed">not even close.</p>

          <p className="font-sans text-lg leading-relaxed">
            we're a team of software people - no civil engineering background,
            no coastal geomorphology degree.
          </p>

          <p className="font-sans text-lg leading-relaxed">
            but honestly, it turned out to be fascinating.
          </p>

          <p className="font-sans text-lg leading-relaxed">
            the more we read, the more insane it felt that{" "}
            <strong className="font-semibold">sand</strong>, the thing literally
            under everyone's feet, is the backbone of almost everything around
            us - and yet the way scientists study it is still extremely slow and
            manual.
          </p>

          <p className="font-sans text-lg leading-relaxed">
            the Ministry of Earth Sciences put forward this problem, and we
            picked it...
          </p>

          <p className="font-sans text-lg leading-relaxed">
            <em>at first without taking it seriously</em>.
          </p>

          <p className="font-sans text-lg leading-relaxed">
            but as we dug deeper (pun intended), we realised something shocking:
          </p>

          <p className="font-sans text-lg leading-relaxed">
            there is{" "}
            <strong className="font-semibold">
              no open-source Indian sand dataset
            </strong>
            .
          </p>

          <p className="font-sans text-lg leading-relaxed">
            <strong className="font-semibold">none.</strong>
          </p>

          <p className="font-sans text-lg leading-relaxed">
            for the world's{" "}
            <strong className="font-semibold">second most used resource</strong>
            , the country has <strong className="font-semibold">zero</strong>{" "}
            openly accessible data.
          </p>

          <p className="font-sans text-lg leading-relaxed">
            scientists still go to the field, collect samples manually, dry
            them, sieve them, weigh them, compute percentiles, run stats...
          </p>

          <p className="font-sans text-lg leading-relaxed">
            and all of this takes{" "}
            <strong className="font-semibold">hours to days</strong>, for just{" "}
            <em>one</em> sample.
          </p>

          <p className="font-sans text-lg leading-relaxed">
            in 2025, that shouldn't be normal.
          </p>

          <p className="font-sans text-lg leading-relaxed">
            so we built something.
          </p>

          <p className="font-sans text-lg leading-relaxed">
            and honestly... we built more than what they asked for.
          </p>

          <h2 className="font-serif text-2xl mt-8">What we built</h2>

          <p className="font-sans text-lg leading-relaxed">
            we built a{" "}
            <strong className="font-semibold">
              low-cost camera-based mapping "system"
            </strong>
            , end-to-end, that lets you:
          </p>

          <ol className="list-decimal list-inside ml-4 space-y-2">
            <li className="font-sans">
              take a picture of sand (smartphone / raspberry pi camera / drone)
            </li>
            <li className="font-sans">upload it to our portal</li>
            <li className="font-sans">
              get back complete grain size distribution
            </li>
            <li className="font-sans">
              get phi values, percentiles, sorting, asymmetry, kurtosis
            </li>
            <li className="font-sans">
              get the beach classification (AI based)
            </li>
            <li className="font-sans">
              get GPS-mapped location history (if the image contains geo-tags)
            </li>
          </ol>

          <p className="font-sans text-lg leading-relaxed">
            everything happens automatically - in under a few seconds.
          </p>

          <p className="font-sans text-lg leading-relaxed">
            you send <strong className="font-semibold">one image</strong> {"->"}{" "}
            our server does the processing {"->"} you get meaningful,
            research-grade data.
          </p>

          <h2 className="font-serif text-2xl mt-8">Why this matters</h2>

          <p className="font-sans text-lg leading-relaxed">
            if you're a researcher, geologist, coastal engineer, ecologist, or
            just someone curious - you no longer need:
          </p>

          <ul className="list-disc list-inside ml-4 space-y-2">
            <li className="font-sans">physical sieving</li>
            <li className="font-sans">lab equipment</li>
            <li className="font-sans">drying ovens</li>
            <li className="font-sans">sediment splitters</li>
            <li className="font-sans">10 hours of manual calculation</li>
            <li className="font-sans">multiple field visits</li>
            <li className="font-sans">
              and the whole struggle that the "Practical Handbook of Grain Size
              Analysis" talks about
            </li>
          </ul>

          <p className="font-sans text-lg leading-relaxed">
            we turn your image into:
          </p>

          <p className="font-sans text-lg leading-relaxed">
            <strong className="font-semibold">
              D10, D16, D25, D50, D65, D75, D84, D90
            </strong>
          </p>

          <p className="font-sans text-lg leading-relaxed">
            {"->"} converted automatically into{" "}
            <strong className="font-semibold">phi (phi)</strong>
          </p>

          <p className="font-sans text-lg leading-relaxed">
            {"->"} fed into formulas to compute:
          </p>

          <ul className="list-disc list-inside ml-4 space-y-2">
            <li className="font-sans">Trask Sorting Index</li>
            <li className="font-sans">Krumbein Dispersion</li>
            <li className="font-sans">Otto-Inman Dispersion</li>
            <li className="font-sans">Cailleux Dispersion</li>
            <li className="font-sans">Pomerol Heterometry</li>
            <li className="font-sans">Folk-Ward Mean</li>
            <li className="font-sans">Trask Asymmetry</li>
            <li className="font-sans">Inman Asymmetry (central)</li>
            <li className="font-sans">multiple shape indices</li>
          </ul>

          <p className="font-sans text-lg leading-relaxed">and many more.</p>

          <p className="font-sans text-lg leading-relaxed">
            real scientists use these numbers.
          </p>

          <p className="font-sans text-lg leading-relaxed">
            we made them accessible.
          </p>

          <h2 className="font-serif text-2xl mt-8">
            How the hardware side works (the star of the show)
          </h2>

          <p className="font-sans text-lg leading-relaxed">
            so the original goal was a{" "}
            <strong className="font-semibold">
              low-cost camera-based sand mapping system
            </strong>
            .
          </p>

          <p className="font-sans text-lg leading-relaxed">
            and we absolutely did build it.
          </p>

          <p className="font-sans text-lg leading-relaxed">you can use:</p>

          <ul className="list-disc list-inside ml-4 space-y-2">
            <li className="font-sans">
              <strong>smartphone</strong>
            </li>
            <li className="font-sans">
              <strong>raspberry pi camera</strong>
            </li>
            <li className="font-sans">
              <strong>drone image</strong>
            </li>
            <li className="font-sans">
              literally <em>any</em> device that can take a reasonably clear
              picture
            </li>
          </ul>

          <p className="font-sans text-lg leading-relaxed">
            because our whole system is uniform - it only needs{" "}
            <strong className="font-semibold">one good image</strong>.
          </p>

          <h3 className="font-serif text-xl mt-6">
            Requirements for the image
          </h3>

          <p className="font-sans text-lg leading-relaxed">
            to get the actual grain size in mm: you need{" "}
            <strong className="font-semibold">scale reference</strong>.
          </p>

          <p className="font-sans text-lg leading-relaxed">
            so we offer two ways:
          </p>

          <ol className="list-decimal list-inside ml-4 space-y-2">
            <li className="font-sans">
              <strong className="font-semibold">coin-based reference</strong>
              <ul className="list-disc list-inside ml-6 space-y-1">
                <li className="font-sans">
                  if you don't know the height of the image
                </li>
                <li className="font-sans">
                  we trained a model to detect an Indian coin
                </li>
                <li className="font-sans">it takes ~30 seconds to analyze</li>
                <li className="font-sans">
                  we annotated the dataset manually (will open-source it)
                </li>
              </ul>
            </li>
            <li className="font-sans">
              <strong className="font-semibold">height-based reference</strong>
              <ul className="list-disc list-inside ml-6 space-y-1">
                <li className="font-sans">if using a drone</li>
                <li className="font-sans">
                  just send height metadata, no coin needed
                </li>
              </ul>
            </li>
          </ol>

          <h3 className="font-serif text-xl mt-6">GPS integration</h3>

          <p className="font-sans text-lg leading-relaxed">
            if your image contains GPS EXIF data:
          </p>

          <ul className="list-disc list-inside ml-4 space-y-2">
            <li className="font-sans">we extract it</li>
            <li className="font-sans">map it on our dashboard</li>
            <li className="font-sans">keep the history</li>
            <li className="font-sans">
              help researchers build longitudinal datasets
            </li>
          </ul>

          <h3 className="font-serif text-xl mt-6">Drone integration</h3>

          <p className="font-sans text-lg leading-relaxed">
            we're not building drone automation <em>yet</em>,
          </p>

          <p className="font-sans text-lg leading-relaxed">
            but we suggest using drones for people who want large-scale sampling
            across the beach without physically walking to every location.
          </p>

          <p className="font-sans text-lg leading-relaxed">
            for smaller sets (15-20 samples), smartphones are enough.
          </p>

          <h2 className="font-serif text-2xl mt-8">
            What the system does (the pipeline)
          </h2>

          <p className="font-sans text-lg leading-relaxed">upload image</p>
          <p className="font-sans text-lg leading-relaxed">
            {"->"} server receives it
          </p>
          <p className="font-sans text-lg leading-relaxed">
            {"->"} pre-processing
          </p>
          <p className="font-sans text-lg leading-relaxed">
            {"->"} segmentation + grain detection
          </p>
          <p className="font-sans text-lg leading-relaxed">
            {"->"} coin/height calibration
          </p>
          <p className="font-sans text-lg leading-relaxed">
            {"->"} grain size estimation
          </p>
          <p className="font-sans text-lg leading-relaxed">
            {"->"} percentile calculation
          </p>
          <p className="font-sans text-lg leading-relaxed">
            {"->"} phi conversion
          </p>
          <p className="font-sans text-lg leading-relaxed">
            {"->"} granulometric indices
          </p>
          <p className="font-sans text-lg leading-relaxed">
            {"->"} graphs + distribution curves
          </p>
          <p className="font-sans text-lg leading-relaxed">{"->"} summary</p>
          <p className="font-sans text-lg leading-relaxed">
            {"->"} AI-based beach classification
          </p>
          <p className="font-sans text-lg leading-relaxed">
            {"->"} GPS mapping
          </p>

          <p className="font-sans text-lg leading-relaxed">done.</p>

          <p className="font-sans text-lg leading-relaxed">
            everything happens in one flow.
          </p>

          <h2 className="font-serif text-2xl mt-8">
            Formulas we currently compute
          </h2>

          <h3 className="font-serif text-xl mt-4">Sorting & Dispersion</h3>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li className="font-sans">Trask Sorting Index</li>
            <li className="font-sans">Krumbein Index (Qdphi)</li>
            <li className="font-sans">Otto-Inman Dispersion</li>
            <li className="font-sans">Cailleux Dispersion</li>
            <li className="font-sans">Pomerol Heterometry</li>
            <li className="font-sans">Folk-Ward Dispersion (sigmaI)</li>
          </ul>

          <h3 className="font-serif text-xl mt-4">Asymmetry / Skewness</h3>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li className="font-sans">Trask asymmetry (ast)</li>
            <li className="font-sans">Inman asymmetry (central)</li>
            <li className="font-sans">Inman asymmetry (extremities)</li>
            <li className="font-sans">Krumbein skewness (SKphi)</li>
            <li className="font-sans">Pomerol asymmetry</li>
          </ul>

          <h3 className="font-serif text-xl mt-4">Position & Mean</h3>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li className="font-sans">Folk-Ward Mean Grain Size (MG)</li>
            <li className="font-sans">Median phi</li>
          </ul>

          <h3 className="font-serif text-xl mt-4">Shape Indices</h3>
          <p className="font-sans text-lg leading-relaxed">
            multiple grain-shape related computations (derived from image
            contours)
          </p>

          <p className="font-sans text-lg leading-relaxed">
            we even provide graphs, for the "we don't read crew"
          </p>

          <h2 className="font-serif text-2xl mt-8">Image guidelines</h2>

          <ol className="list-decimal list-inside ml-4 space-y-2">
            <li className="font-sans">
              image must be <strong className="font-semibold">sharp</strong>
            </li>
            <li className="font-sans">sand grains visible (avoid shadows)</li>
            <li className="font-sans">
              include <strong className="font-semibold">coin</strong> if you're
              using phone
            </li>
            <li className="font-sans">
              ensure <strong className="font-semibold">GPS metadata</strong> is
              ON
            </li>
            <li className="font-sans">
              drone: supply <strong className="font-semibold">height</strong>
            </li>
            <li className="font-sans">
              avoid foot shadows, fingers, strong reflections
            </li>
          </ol>

          <h2 className="font-serif text-2xl mt-8">Proving the point</h2>

          <p className="font-sans text-lg leading-relaxed">
            this is peak automation:
          </p>

          <p className="font-sans text-lg leading-relaxed">
            you send images {"->"} our system produces
          </p>

          <p className="font-sans text-lg leading-relaxed">
            meaningful, interpretable, mathematically correct sediment
            statistics.
          </p>

          <p className="font-sans text-lg leading-relaxed">no sieves.</p>
          <p className="font-sans text-lg leading-relaxed">no ovens.</p>
          <p className="font-sans text-lg leading-relaxed">no lab.</p>
          <p className="font-sans text-lg leading-relaxed">no waiting.</p>

          <p className="font-sans text-lg leading-relaxed">
            just science in seconds.
          </p>

          <h2 className="font-serif text-2xl mt-8">
            Description for Your CDF Grain Size Graph
          </h2>

          <p className="font-sans text-lg leading-relaxed">
            This graph represents the{" "}
            <strong className="font-semibold">
              Cumulative Grain Size Distribution (CDF)
            </strong>{" "}
            of the sand sample processed by our automated sand-analysis system.
            It shows how much of the total sample (in{" "}
            <strong className="font-semibold">% finer</strong>) falls below each
            grain size value (in{" "}
            <strong className="font-semibold">mm or phi</strong>).
          </p>

          <h3 className="font-serif text-xl mt-4">What the Curve Tells You</h3>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li className="font-sans">
              The <strong className="font-semibold">shape of the curve</strong>{" "}
              reflects how the grains are distributed - whether the sand is
              fine, medium, or coarse.
            </li>
            <li className="font-sans">
              The curve's <strong className="font-semibold">steepness</strong>{" "}
              indicates <strong className="font-semibold">sorting</strong>:
              <ul className="ml-6 space-y-1 list-disc list-inside">
                <li className="font-sans">
                  A <strong className="font-semibold">steep curve</strong>{" "}
                  {"->"} well-sorted sand
                </li>
                <li className="font-sans">
                  A <strong className="font-semibold">flatter curve</strong>{" "}
                  {"->"} poorly sorted sand
                </li>
              </ul>
            </li>
            <li className="font-sans">
              The graph also highlights key percentiles like{" "}
              <strong className="font-semibold">D5, D10, D50, D90, D95</strong>,
              which help quantify the statistical behavior of the sample.
            </li>
          </ul>

          <h3 className="font-serif text-xl mt-4">
            Why These Percentiles Matter
          </h3>
          <p className="font-sans text-lg leading-relaxed">
            Each percentile links directly to important sedimentology formulas
            we compute:
          </p>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li className="font-sans">
              <strong className="font-semibold">D50</strong> {"->"} Median grain
              size (overall nature of the sand)
            </li>
            <li className="font-sans">
              <strong className="font-semibold">D10 &amp; D90</strong> {"->"}{" "}
              Used for <em>Trask Sorting</em>, <em>Inman Asymmetry</em>, and{" "}
              <em>Pomerol Heterometry</em>
            </li>
            <li className="font-sans">
              Multiple{" "}
              <strong className="font-semibold">phi-based percentiles</strong>{" "}
              {"->"} Feed into advanced dispersion and skewness indices
            </li>
          </ul>
        </article>
      </main>
    </>
  );
}
