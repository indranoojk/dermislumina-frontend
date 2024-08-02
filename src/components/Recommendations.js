import React from 'react';
import useScrollToTop from './useScrollToTop';

const Recommendations = () => {

  useScrollToTop();

  const selectedAge = localStorage.getItem('selectedAge');
  const selectedConcern = localStorage.getItem('selectedConcern');

  const handleClickResults = () => {
    if (selectedAge === 'below 18' && selectedConcern === 'acne') {
      return (
        <div className="p-7">
          <h2 className='text-4xl font-bold font-serif'>Skincare Routine:</h2>
          <div className="p-3">
            <h2 className='text-2xl font-bold font-serif'>Morning Routine:</h2>
            <ol className='list-decimal list-inside text-lg p-3'>
              <li>
                <strong className='text-xl'>Cleanser:</strong> Cleanse with a gentle foaming cleanser containing salicylic acid to remove oil and impurities.
              </li>
              <li>
                <strong className='text-xl'>Toner:</strong> Apply a hydrating toner with niacinamide to balance the skin and reduce inflammation.
              </li>
              <li>
                <strong className='text-xl'>Moisturizer:</strong> Use a lightweight, oil-free moisturizer to hydrate.
              </li>
              <li>
                <strong>SPF:</strong> Apply Broad-spectrum SPF 30 or higher.
              </li>
              
            </ol>
            <h2 className='text-2xl font-bold font-serif'>Night Routine:</h2>
            <ol className='list-decimal list-inside text-lg p-3'>
              <li>
                <strong className='text-xl'>Cleanser:</strong> Repeat the morning cleansing routine.
              </li>
              <li>
                <strong className='text-xl'>Treatment:</strong> Use a gentle exfoliating product with salicylic acid or glycolic acid (once or twice a week) to help fade dark spots.
              </li>
              <li>
                <strong className='text-xl'>Moisturizer:</strong> Apply a thicker, hydrating moisturizer to lock in moisture overnight.
              </li>
            </ol>
            <div className="text-lg">
              <strong>Key Ingredients: </strong> Salicylic acid, niacinamide, tea tree oil, gentle hydrating agents. <br />
              <strong>Focus: </strong>  <br />
              <strong>Additional Tips: </strong>  <br />
              <ul className='list-disc list-inside'>
                <li>Prioritize a healthy lifestyle.</li>
                <li>Get enough  sleep and nutrition.</li>
                <li>Avoid visiting polluted areas.</li>
              </ul>
            </div>
          </div>
        </div>
      )
    }

    else if (selectedAge === 'below 18' && selectedConcern === 'fineLines') {
      return (
        <div className="p-7">
          <h2 className='text-4xl font-bold font-serif'>Skincare Routine:</h2>
          <div className="p-3">
            <h2 className='text-2xl font-bold font-serif'>Morning Routine:</h2>
            <ol className='list-decimal list-inside text-lg p-3'>
              <li>
                <strong className='text-xl'>Cleanser:</strong> Use a gentle, hydrating cleanser to remove impurities without stripping the skin.
              </li>
              <li>
                <strong className='text-xl'>Toner:</strong> Apply a hydrating toner with hyaluronic acid to boost moisture regain.
              </li>
              <li>
                <strong className='text-xl'>Moisturizer:</strong> Use a lightweight, oil-free moisturizer with hyaluronic acid for hydration.
              </li>
              <li>
                <strong>SPF:</strong> Apply a broad-spectrum SPF 30 or higher to protect against premature aging.
              </li>
            </ol>
            <h2 className='text-2xl font-bold font-serif'>Night Routine:</h2>
            <ol className='list-decimal list-inside text-lg p-3'>
              <li>
                <strong className='text-xl'>Cleanser:</strong> Repeat the morning cleansing routine.
              </li>
              <li>
                <strong className='text-xl'>Treatment:</strong> Use a gentle exfoliating product with salicylic acid or glycolic acid (once or twice a week) to help fade dark spots.
              </li>
              <li>
                <strong className='text-xl'>Moisturizer:</strong> Apply a thicker, hydrating moisturizer to lock in moisture overnight.
              </li>
            </ol>
            <div className="text-lg">
              <strong>Key Ingredients: </strong> Hyaluronic acid, gentle hydrating agents, SPF. <br />
              <strong>Focus: </strong> hydration and gentle care. <br />
              <strong>Additional Tips: </strong> <br />
              <ul className='list-disc list-inside'>
                <li>Prioritize a healthy lifestyle with adequate sleep, nutrition, and hydration.</li>
                <li>Protect skin from sun exposure by wearing hats and protective clothing.</li>
                <li>Avoid smoking and drinking alcohol.</li>
              </ul>
            </div>
          </div>
        </div>
      )
    }

    else if (selectedAge === 'below 18' && selectedConcern === 'darkSpots') {
      return (
        <div className="p-7">
          <h2 className='text-4xl font-bold font-serif'>Skincare Routine:</h2>
          <div className="p-3">
            <h2 className='text-2xl font-bold font-serif'>Morning Routine:</h2>
            <ol className='list-decimal list-inside text-lg p-3'>
              <li>
                <strong className='text-xl'>Cleanser:</strong> Use a gentle, hydrating cleanser to remove impurities.
              </li>
              <li>
                <strong className='text-xl'>Toner:</strong> Apply a hydrating toner with vitamin C for brightening.
              </li>
              <li>
                <strong className='text-xl'>Moisturizer:</strong> Use a lightweight, oil-free moisturizer with SPF 30 or higher.
              </li>
            </ol>
            <h2 className='text-2xl font-bold font-serif'>Night Routine:</h2>
            <ol className='list-decimal list-inside text-lg p-3'>
              <li>
                <strong className='text-xl'>Cleanser:</strong> Repeat the morning cleansing routine.
              </li>
              <li>
                <strong className='text-xl'>Treatment:</strong> : Use a gentle exfoliating product with salicylic acid or glycolic acid (once or twice a week) to help fade dark spots.
              </li>
              <li>
                <strong className='text-xl'>Moisturizer:</strong> Apply a hydrating moisturizer to lock in moisture.
              </li>
            </ol>
            <div className="text-lg">
              <strong>Key Ingredients: </strong> Vitamin C, salicylic acid, glycolic acid, SPF. <br />
              <strong>Focus: </strong> Gentle exfoliation, sun protection, and hydration. <br />
              <strong>Additional Tips: </strong>  <br />
              <ul className='list-disc list-inside'>
                <li>Avoid excessive sun exposure and always wear sunscreen.</li>
                <li>Be patient, as it may take time for dark spots to fade.</li>
                <li>Avoid harsh products that can irritate sensitive skin.</li>
              </ul>
            </div>
          </div>
        </div>
      )
    }

    else if (selectedAge === 'below 18' && selectedConcern === 'dryness') {
      return (
        <div className="p-7">
          <h2 className='text-4xl font-bold font-serif'>Skincare Routine:</h2>
          <div className="p-3">
            <h2 className='text-2xl font-bold font-serif'>Morning Routine:</h2>
            <ol className='list-decimal list-inside text-lg p-3'>
              <li>
                <strong className='text-xl'>Cleanser:</strong> Use a gentle, creamy cleanser to avoid stripping the skin.
              </li>
              <li>
                <strong className='text-xl'>Toner:</strong> Apply a hydrating toner with hyaluronic acid to boost moisture.
              </li>
              <li>
                <strong className='text-xl'>Moisturizer:</strong> Use a lightweight, oil-free moisturizer with hyaluronic acid and ceramides.
              </li>
              <li>
                <strong>SPF:</strong> Apply a broad-spectrum SPF 30 or higher.
              </li>
            </ol>
            <h2 className='text-2xl font-bold font-serif'>Night Routine:</h2>
            <ol className='list-decimal list-inside text-lg p-3'>
              <li>
                <strong className='text-xl'>Cleanser:</strong> Repeat the morning cleansing routine.
              </li>
              <li>
                <strong className='text-xl'>Moisturizer:</strong> Use a richer, cream-based moisturizer with ceramides to lock in hydration.
              </li>
              <li>
                <strong className='text-xl'>Optional:</strong> Apply a hydrating face mask once or twice a week.
              </li>
            </ol>
            <div className="text-lg">
              <strong>Key Ingredients: </strong> Hyaluronic acid, ceramides, gentle cleansers. <br />
              <strong>Focus: </strong> Hydration and barrier repair. <br />
              <strong>Additional Tips: </strong>  <br />
              <ul className='list-disc list-inside'>
                <li>Avoid long, hot showers as they can dry out the skin.</li>
                <li>Use lukewarm water when washing your face.</li>
                <li>Consider using a humidifier in your bedroom.</li>
              </ul>
            </div>
          </div>
        </div>
      )
    }

    else if (selectedAge === 'below 18' && selectedConcern === 'redness') {
      return (
        <div className="p-7">
          <h2 className='text-4xl font-bold font-serif'>Skincare Routine:</h2>
          <div className="p-3">
            <h2 className='text-2xl font-bold font-serif'>Morning Routine:</h2>
            <ol className='list-decimal list-inside text-lg p-3'>
              <li>
                <strong className='text-xl'>Cleanser:</strong> Use a gentle, creamy cleanser without harsh sulfates.
              </li>
              <li>
                <strong className='text-xl'>Toner:</strong> Apply a hydrating and soothing toner with aloe vera or chamomile.
              </li>
              <li>
                <strong className='text-xl'>Moisturizer:</strong> Use a lightweight with hyaluronic acid and calming ingredients like green tea.
              </li>
              <li>
                <strong>SPF:</strong> Apply a broad-spectrum SPF 30 or higher.
              </li>
            </ol>
            <h2 className='text-2xl font-bold font-serif'>Night Routine:</h2>
            <ol className='list-decimal list-inside text-lg p-3'>
              <li>
                <strong className='text-xl'>Cleanser:</strong> Repeat the morning cleansing routine.
              </li>
              <li>
                <strong className='text-xl'>Optional:</strong> Apply a calming face mask once or twice a week.
              </li>
              <li>
                <strong className='text-xl'>Moisturizer:</strong> Use a richer, cream-based moisturizer with ceramides to strengthen the skin barrier.
              </li>
            </ol>
            <div className="text-lg">
              <strong>Key Ingredients: </strong> Hyaluronic acid, ceramides, aloe vera, chamomile, green tea. <br />
              <strong>Focus: </strong> Gentle cleansing, hydration, and calming. <br />
              <strong>Additional Tips: </strong>  <br />
              <ul className='list-disc list-inside'>
                <li>Avoid harsh exfoliants .</li>
                <li>Opt for hypoallergenic and fragrance-free products.</li>
                <li>Manage stress through relaxation techniques like meditation or yoga.</li>
              </ul>
            </div>
          </div>
        </div>
      )
    }

    else if (selectedAge === '18-24' && selectedConcern === 'acne') {
      return (
        <div className="p-7">
          <h2 className='text-4xl font-bold font-serif'>Skincare Routine:</h2>
          <div className="p-3">
            <h2 className='text-2xl font-bold font-serif'>Morning Routine:</h2>
            <ol className='list-decimal list-inside text-lg p-3'>
              <li>
                <strong className='text-xl'>Cleanser:</strong> Use a gentle, oil-free cleanser with salicylic acid to remove impurities.
              </li>
              <li>
                <strong className='text-xl'>Toner:</strong> Apply a balancing toner with witch hazel to control oil production.
              </li>
              <li>
                <strong className='text-xl'>Serum:</strong> Use a niacinamide serum to regulate sebum production and improve skin texture.
              </li>
              <li>
                <strong className='text-xl'>Moisturizer:</strong> Use a lightweight, oil-free moisturizer with hyaluronic acid for hydration.
              </li>
              <li>
                <strong>SPF:</strong> Apply a broad-spectrum SPF 30 or higher.
              </li>
            </ol>
            <h2 className='text-2xl font-bold font-serif'>Night Routine:</h2>
            <ol className='list-decimal list-inside text-lg p-3'>
              <li>
                <strong className='text-xl'>Cleanser:</strong> Repeat the morning cleansing routine.
              </li>
              <li>
                <strong className='text-xl'>Treatment:</strong> Apply a benzoyl peroxide or salicylic acid-based spot treatment to acne-prone areas.
              </li>
              <li>
                <strong className='text-xl'>Moisturizer:</strong> Use a lightweight, oil-free moisturizer.
              </li>
            </ol>
            <div className="text-lg">
              <strong>Key Ingredients: </strong> Salicylic acid, niacinamide, benzoyl peroxide, witch hazel, hyaluronic acid. <br />
              <strong>Focus: </strong> Clearing congestion, preventing breakouts, and hydration. <br />
              <strong>Additional Tips: </strong>  <br />
              <ul className='list-disc list-inside'>
                <li>Avoid touching your face to prevent the spread of bacteria.</li>
                <li>Change silk pillowcases regularly</li>
                <li>Consider using oil-free makeup and skincare products.</li>
              </ul>
            </div>
          </div>
        </div>
      )
    }

    else if (selectedAge === '18-24' && selectedConcern === 'fineLines') {
      return (
        <div className="p-7">
          <h2 className='text-4xl font-bold font-serif'>Skincare Routine:</h2>
          <div className="p-3">
            <h2 className='text-2xl font-bold font-serif'>Morning Routine:</h2>
            <ol className='list-decimal list-inside text-lg p-3'>
              <li>
                <strong className='text-xl'>Cleanser:</strong> Use a gentle, hydrating cleanser to remove impurities.
              </li>
              <li>
                <strong className='text-xl'>Toner:</strong> Apply a hydrating toner with hyaluronic acid to boost moisture.
              </li>
              <li>
                <strong className='text-xl'>Serum:</strong> Use a vitamin C serum to protect against free radicals and brighten skin.
              </li>
              <li>
                <strong className='text-xl'>Moisturizer:</strong> Use a lightweight, oil-free moisturizer with hyaluronic acid and SPF 30 or higher.
              </li>
              
            </ol>
            <h2 className='text-2xl font-bold font-serif'>Night Routine:</h2>
            <ol className='list-decimal list-inside text-lg p-3'>
              <li>
                <strong className='text-xl'>Cleanser:</strong> Repeat the morning cleansing routine.
              </li>
              <li>
                <strong className='text-xl'>Serum:</strong> Apply a retinol or retinoid-based serum (start with a pea size concentration) to stimulate collagen production.
              </li>
              <li>
                <strong className='text-xl'>Moisturizer:</strong> Use a richer, hydrating moisturizer to lock in moisture.
              </li>
            </ol>
            <div className="text-lg">
              <strong>Key Ingredients: </strong> Hyaluronic acid, vitamin C, retinol/retinoids, SPF. <br />
              <strong>Focus: </strong> Prevention, hydration, and antioxidant protection. <br />
              <strong>Additional Tips: </strong>  <br />
              <ul className='list-disc list-inside'>
                <li>Wearing a hat and sunglasses in sun.</li>
                <li>Incorporate antioxidant-rich foods into your diet.</li>
                <li>Get enough sleep to promote skin cell regeneration.</li>
              </ul>
            </div>
          </div>
        </div>
      )
    }

    else if (selectedAge === '18-24' && selectedConcern === 'darkSpots') {
      return (
        <div className="p-7">
          <h2 className='text-4xl font-bold font-serif'>Skincare Routine:</h2>
          <div className="p-3">
            <h2 className='text-2xl font-bold font-serif'>Morning Routine:</h2>
            <ol className='list-decimal list-inside text-lg p-3'>
              <li>
                <strong className='text-xl'>Cleanser:</strong> Use a gentle, hydrating cleanser to remove impurities.
              </li>
              <li>
                <strong className='text-xl'>Toner:</strong> Apply a brightening toner with vitamin C and niacinamide to even skin tone.
              </li>
              <li>
                <strong className='text-xl'>Moisturizer:</strong> Use a vitamin C serum for additional brightening and antioxidant protection.
              </li>
              <li>
                <strong>SPF:</strong> Use a lightweight, oil-free moisturizer with SPF 30 or higher.
              </li>
            </ol>
            <h2 className='text-2xl font-bold font-serif'>Night Routine:</h2>
            <ol className='list-decimal list-inside text-lg p-3'>
              <li>
                <strong className='text-xl'>Cleanser:</strong> Repeat the morning cleansing routine.
              </li>
              <li>
                <strong className='text-xl'>Treatment:</strong> Use a gentle exfoliating product with alpha-hydroxy acids (AHAs) or beta-hydroxy acids (BHAs) to promote cell turnover.
              </li>
              <li>
                <strong className='text-xl'>Moisturizer:</strong> Use a hydrating moisturizer to lock in moisture.
              </li>
            </ol>
            <div className="text-lg">
              <strong>Key Ingredients: </strong> Vitamin C, niacinamide, AHAs, BHAs, SPF. <br />
              <strong>Focus: </strong> Brightening, exfoliation, and sun protection. <br />
              <strong>Additional Tips: </strong> <br />
              <ul className='list-disc list-inside'>
                <li>Avoid excessive sun exposure and always wear sunscreen.</li>
                <li>Be patient, as it may take time for dark spots to fade.</li>
              </ul>
            </div>
          </div>
        </div>
      )
    }

    else if (selectedAge === '18-24' && selectedConcern === 'dryness') {
      return (
        <div className="p-7">
          <h2 className='text-4xl font-bold font-serif'>Skincare Routine:</h2>
          <div className="p-3">
            <h2 className='text-2xl font-bold font-serif'>Morning Routine:</h2>
            <ol className='list-decimal list-inside text-lg p-3'>
              <li>
                <strong className='text-xl'>Cleanser:</strong> Use a gentle, creamy cleanser to avoid stripping the skin.
              </li>
              <li>
                <strong className='text-xl'>Toner:</strong> Apply a hydrating toner with hyaluronic acid or rice based to quench thirst.
              </li>
              <li>
                <strong className='text-xl'>Serum:</strong> Use a hyaluronic acid serum for extra hydration.
              </li>
              <li>
                <strong className='text-xl'>Moisturizer:</strong> Use a rich, creamy moisturizer with ceramides to lock in moisture.
              </li>
              <li>
                <strong>SPF:</strong> Apply a broad-spectrum SPF 30 or higher.
              </li>
              
            </ol>
            <h2 className='text-2xl font-bold font-serif'>Night Routine:</h2>
            <ol className='list-decimal list-inside text-lg p-3'>
              <li>
                <strong className='text-xl'>Cleanser:</strong> Repeat the morning cleansing routine.
              </li>
              <li>
                <strong className='text-xl'>Treatment:</strong> Apply a hydrating face mask once or twice a week.
              </li>
              <li>
                <strong className='text-xl'>Moisturizer:</strong> Use a thick, occlusive night cream to prevent moisture loss.
              </li>
            </ol>
            <div className="text-lg">
              <strong>Key Ingredients: </strong> Hyaluronic acid, ceramides, occlusive moisturizers. <br />
              <strong>Focus: </strong> Intense hydration and barrier repair. <br />
              <strong>Additional Tips: </strong>  <br />
              <ul className='list-disc list-inside'>
                <li>Avoid harsh exfoliants and hot showers.</li>
                <li>Use lukewarm water when washing your face.</li>
                <li>Consider using a humidifier in your bedroom.</li>
              </ul>
            </div>
          </div>
        </div>
      )
    }

    else if (selectedAge === '18-24' && selectedConcern === 'redness') {
      return (
        <div className="p-7">
          <h2 className='text-4xl font-bold font-serif'>Skincare Routine:</h2>
          <div className="p-3">
            <h2 className='text-2xl font-bold font-serif'>Morning Routine:</h2>
            <ol className='list-decimal list-inside text-lg p-3'>
              <li>
                <strong className='text-xl'>Cleanser:</strong> Use a gentle, creamy cleanser without sulfates or fragrances.
              </li>
              <li>
                <strong className='text-xl'>Toner:</strong> Apply a hydrating and soothing toner with aloe vera or chamomile.
              </li>
              <li>
                <strong className='text-xl'>Serum:</strong> Use a hyaluronic acid serum to hydrate and plump the skin.
                <strong className='text-xl'>Moisturizer:</strong> Use a lightweight, oil-free moisturizer with calming ingredients like green tea or centella asiatica.
              </li>
              <li>
                <strong>SPF:</strong> Apply a broad-spectrum SPF 30 or higher.
              </li>
              
            </ol>
            <h2 className='text-2xl font-bold font-serif'>Night Routine:</h2>
            <ol className='list-decimal list-inside text-lg p-3'>
              <li>
                <strong className='text-xl'>Cleanser:</strong> Repeat the morning cleansing routine.
              </li>
              <li>
                <strong className='text-xl'>Treatment:</strong> Apply a calming face mask once or twice a week.
              </li>
              <li>
                <strong className='text-xl'>Moisturizer:</strong> Use a rich, cream-based moisturizer with ceramides to strengthen the skin barrier.
              </li>
            </ol>
            <div className="text-lg">
              <strong>Key Ingredients: </strong> Hyaluronic acid, ceramides, aloe vera, chamomile, green tea, centella asiatica. <br />
              <strong>Focus: </strong> Calming, hydration, and barrier repair. <br />
              <strong>Additional Tips: </strong>  <br />
              <ul className='list-disc list-inside'>
                <li>Avoid harsh exfoliants and hot water.</li>
                <li>Choose hypoallergenic and fragrance-free products.</li>
                <li>Manage stress through relaxation techniques.</li>
              </ul>
            </div>
          </div>
        </div>
      )
    }

    else if (selectedAge === '25-34' && selectedConcern === 'acne') {
      return (
        <div className="p-7">
          <h2 className='text-4xl font-bold font-serif'>Skincare Routine:</h2>
          <div className="p-3">
            <h2 className='text-2xl font-bold font-serif'>Morning Routine:</h2>
            <ol className='list-decimal list-inside text-lg p-3'>
              <li>
                <strong className='text-xl'>Cleanser:</strong> Use a gentle, oil-free cleanser containing salicylic acid to remove excess sebum and impurities.
              </li>
              <li>
                <strong className='text-xl'>Toner:</strong> Apply a clarifying toner with witch hazel to balance oil production.
              </li>
              <li>
                <strong className='text-xl'>Serum:</strong> Use a niacinamide serum to regulate sebum and improve skin texture.
              </li>
              <li>
                <strong className='text-xl'>Moisturizer:</strong> Opt for a lightweight, oil-free moisturizer with hyaluronic acid for hydration.
              </li>
              <li>
                <strong>SPF:</strong> Apply a broad-spectrum sunscreen with SPF 30 or higher.
              </li>
              
            </ol>
            <h2 className='text-2xl font-bold font-serif'>Night Routine:</h2>
            <ol className='list-decimal list-inside text-lg p-3'>
              <li>
                <strong className='text-xl'>Cleanser:</strong> Repeat the morning cleansing routine.
              </li>
              <li>
                <strong className='text-xl'>Treatment:</strong> Apply a benzoyl peroxide or adapalene-based treatment to target acne lesions.
              </li>
              <li>
                <strong className='text-xl'>Moisturizer:</strong> Use a lightweight, oil-free moisturizer.
              </li>
            </ol>
            <div className="text-lg">
              <strong>Key Ingredients: </strong> Salicylic acid, niacinamide, benzoyl peroxide, adapalene, hyaluronic acid. <br />
              <strong>Focus: </strong> Targeted treatment, prevention, and hydration. <br />
              <strong>Additional Tips: </strong>  <br />
              <ul className='list-disc list-inside'>
                <li>Consider consulting a dermatologist for persistent or severe acne.</li>
                <li>Avoid excessive exfoliation, as it can irritate the skin.</li>
                <li>Maintain a balanced diet and manage stress levels.</li>
              </ul>
            </div>
          </div>
        </div>
      )
    }

    else if (selectedAge === '25-34' && selectedConcern === 'fineLines') {
      return (
        <div className="p-7">
          <h2 className='text-4xl font-bold font-serif'>Skincare Routine:</h2>
          <div className="p-3">
            <h2 className='text-2xl font-bold font-serif'>Morning Routine:</h2>
            <ol className='list-decimal list-inside text-lg p-3'>
              <li>
                <strong className='text-xl'>Cleanser:</strong> Use a gentle, hydrating cleanser to remove impurities without stripping the skin.
              </li>
              <li>
                <strong className='text-xl'>Toner:</strong> Apply a hydrating toner with hyaluronic acid to boost moisture retention.
              </li>
              <li>
                <strong className='text-xl'>Serum:</strong> Use a vitamin C serum to brighten and protect against free radicals.
              </li>
              <li>
                <strong className='text-xl'>Moisturizer:</strong> Opt for a hydrating moisturizer.
              </li>
              <li>
                <strong>SPF:</strong> SPF 50 or higher to protect against sun damage.
              </li>
              <li>
                <strong>Eye cream:</strong> Apply an eye cream to address fine lines and puffiness.
              </li>
              
            </ol>
            <h2 className='text-2xl font-bold font-serif'>Night Routine:</h2>
            <ol className='list-decimal list-inside text-lg p-3'>
              <li>
                <strong className='text-xl'>Cleanser:</strong> Repeat the morning cleansing routine.
              </li>
              <li>
                <strong className='text-xl'>Treatment:</strong> Introduce a retinol or retinoid serum (start with a lower concentration) to stimulate collagen production.
              </li>
              <li>
                <strong className='text-xl'>Moisturizer:</strong> Use a rich, hydrating night cream to lock in moisture.
              </li>
              <li>
                <strong className='text-xl'>Eye cream:</strong> Reapply the eye cream containing Neuropeptides, retinol for extra nourishment.
              </li>
            </ol>
            <div className="text-lg">
              <strong>Key Ingredients: </strong> Hyaluronic acid, vitamin C, retinol/retinoids, SPF. <br />
              <strong>Focus: </strong> Anti-aging, hydration, and protection. <br />
              <strong>Additional Tips: </strong> Anti-aging, hydration, and protection. <br />
              <ul className='list-disc list-inside'>
                <li>Gradually increase the strength of your retinol or retinoid product as your skin tolerates it.</li>
                <li>Consider incorporating peptides and antioxidants into your routine for added benefits.</li>
                <li>Prioritize a healthy lifestyle with adequate sleep, hydration, and nutrition.</li>
              </ul>
            </div>
          </div>
        </div>
      )
    }

    else if (selectedAge === '25-34' && selectedConcern === 'darkSpots') {
      return (
        <div className="p-7">
          <h2 className='text-4xl font-bold font-serif'>Skincare Routine:</h2>
          <div className="p-3">
            <h2 className='text-2xl font-bold font-serif'>Morning Routine:</h2>
            <ol className='list-decimal list-inside text-lg p-3'>
              <li>
                <strong className='text-xl'>Cleanser:</strong> Use a gentle, creamy cleanser to avoid stripping the skin's natural oils.
              </li>
              <li>
                <strong className='text-xl'>Toner:</strong> Apply a hydrating toner with hyaluronic acid to quench thirst.
              </li>
              <li>
                <strong className='text-xl'>Serum:</strong> Use a hyaluronic acid serum for an extra hydration boost.
              </li>
              <li>
                <strong className='text-xl'>Moisturizer:</strong> Opt for a rich, creamy moisturizer containing ceramides to strengthen the skin barrier.
              </li>
              <li>
                <strong>SPF:</strong> Apply a broad-spectrum sunscreen with SPF 30 or higher.
              </li>
              
            </ol>
            <h2 className='text-2xl font-bold font-serif'>Night Routine:</h2>
            <ol className='list-decimal list-inside text-lg p-3'>
              <li>
                <strong className='text-xl'>Cleanser:</strong> Repeat the morning cleansing routine.
              </li>
              <li>
                <strong className='text-xl'>Treatment:</strong> Apply a hydrating face mask once or twice a week.
              </li>
              <li>
                <strong className='text-xl'>Moisturizer:</strong> Use an occlusive night cream to seal in moisture.
              </li>
            </ol>
            <div className="text-lg">
              <strong>Key Ingredients: </strong> Hyaluronic acid, ceramides, occlusive moisturizers. <br />
              <strong>Focus: </strong> Intense hydration and barrier repair. <br />
              <strong>Additional Tips: </strong>  <br />
              <ul className='list-disc list-inside'>
                <li>Avoid long, hot showers as they can exacerbate dryness.</li>
                <li>Use lukewarm water when cleansing your face.</li>
                <li>Consider using a humidifier, especially during dry weather.</li>
              </ul>
            </div>
          </div>
        </div>
      )
    }

    else if (selectedAge === '25-34' && selectedConcern === 'dryness') {
      return (
        <div className="p-7">
          <h2 className='text-4xl font-bold font-serif'>Skincare Routine:</h2>
          <div className="p-3">
            <h2 className='text-2xl font-bold font-serif'>Morning Routine:</h2>
            <ol className='list-decimal list-inside text-lg p-3'>
              <li>
                <strong className='text-xl'>Cleanser:</strong> Use a gentle, creamy cleanser to avoid stripping the skin's natural oils.
              </li>
              <li>
                <strong className='text-xl'>Toner:</strong> Apply a hydrating toner with hyaluronic acid to quench thirst.
              </li>
              <li>
                <strong className='text-xl'>Serum:</strong> Use a hyaluronic acid serum for an extra hydration boost.
              </li>
              <li>
                <strong className='text-xl'>Moisturizer:</strong> Opt for a rich, creamy moisturizer containing ceramides to strengthen the skin barrier.
              </li>
              <li>
                <strong>SPF:</strong> Apply a broad-spectrum sunscreen with SPF 30 or higher.
              </li>
              
            </ol>
            <h2 className='text-2xl font-bold font-serif'>Night Routine:</h2>
            <ol className='list-decimal list-inside text-lg p-3'>
              <li>
                <strong className='text-xl'>Cleanser:</strong> Repeat the morning cleansing routine.
              </li>
              <li>
                <strong className='text-xl'>Treatment:</strong> Apply a hydrating face mask once or twice a week.
              </li>
              <li>
                <strong className='text-xl'>Moisturizer:</strong> Use an occlusive night cream to seal in moisture.
              </li>
            </ol>
            <div className="text-lg">
              <strong>Key Ingredients: </strong> Hyaluronic acid, ceramides, occlusive moisturizers. <br />
              <strong>Focus: </strong> Intense hydration and barrier repair. <br />
              <strong>Additional Tips: </strong>  <br />
              <ul className='list-disc list-inside'>
                <li>Avoid long, hot showers as they can exacerbate dryness.</li>
                <li>Use lukewarm water when cleansing your face.</li>
                <li>Consider using a humidifier, especially during dry weather.</li>
              </ul>
            </div>
          </div>
        </div>
      )
    }

    else if (selectedAge === '25-34' && selectedConcern === 'redness') {
      return (
        <div className="p-7">
          <h2 className='text-4xl font-bold font-serif'>Skincare Routine:</h2>
          <div className="p-3">
            <h2 className='text-2xl font-bold font-serif'>Morning Routine:</h2>
            <ol className='list-decimal list-inside text-lg p-3'>
              <li>
                <strong className='text-xl'>Cleanser:</strong> Use a gentle, creamy cleanser without sulfates or fragrances.
              </li>
              <li>
                <strong className='text-xl'>Toner:</strong> Apply a hydrating and soothing toner with aloe vera or chamomile.
              </li>
              <li>
                <strong className='text-xl'>Serum:</strong> Use a niacinamide serum to calm redness and improve skin texture.
              </li>
              <li>
                <strong className='text-xl'>Moisturizer:</strong> Opt for a lightweight, oil-free moisturizer containing centella asiatica to soothe and protect.
              </li>
              <li>
                <strong>SPF:</strong> Apply a broad-spectrum sunscreen with SPF 30 or higher.
              </li>
              
            </ol>
            <h2 className='text-2xl font-bold font-serif'>Night Routine:</h2>
            <ol className='list-decimal list-inside text-lg p-3'>
              <li>
                <strong className='text-xl'>Cleanser:</strong> Repeat the morning cleansing routine.
              </li>
              <li>
                <strong className='text-xl'>Treatment:</strong> Apply a calming face mask once or twice a week.
              </li>
              <li>
                <strong className='text-xl'>Moisturizer:</strong> Use a rich, cream-based moisturizer with ceramides to strengthen the skin barrier.
              </li>
            </ol>
            <div className="text-lg">
              <strong>Key Ingredients: </strong> Niacinamide, centella asiatica, ceramides, aloe vera, chamomile. <br />
              <strong>Focus: </strong> Calming, hydration, and barrier repair. <br />
              <strong>Additional Tips: </strong>  <br />
              <ul className='list-disc list-inside'>
                <li>Avoid harsh exfoliants and hot water.</li>
                <li>Choose hypoallergenic and fragrance-free products.</li>
                <li>Manage stress through relaxation techniques.</li>
              </ul>
            </div>
          </div>
        </div>
      )
    }

    else if (selectedAge === '35-44' && selectedConcern === 'acne') {
      return (
        <div className="p-7">
          <h2 className='text-4xl font-bold font-serif'>Skincare Routine:</h2>
          <div className="p-3">
            <h2 className='text-2xl font-bold font-serif'>Morning Routine:</h2>
            <ol className='list-decimal list-inside text-lg p-3'>
              <li>
                <strong className='text-xl'>Cleanser:</strong> Use a gentle, oil-free cleanser containing salicylic acid to remove excess sebum.
              </li>
              <li>
                <strong className='text-xl'>Toner:</strong> Apply a clarifying toner with witch hazel to balance oil production.
              </li>
              <li>
                <strong className='text-xl'>Serum:</strong> Use a niacinamide serum to regulate sebum and improve skin texture.
              </li>
              <li>
                <strong className='text-xl'>Moisturizer:</strong> Opt for a lightweight, oil-free moisturizer with hyaluronic acid for hydration.
              </li>
              <li>
                <strong>SPF:</strong> Apply a broad-spectrum sunscreen with SPF 30 or higher.
              </li>
              
            </ol>
            <h2 className='text-2xl font-bold font-serif'>Night Routine:</h2>
            <ol className='list-decimal list-inside text-lg p-3'>
              <li>
                <strong className='text-xl'>Cleanser:</strong> Repeat the morning cleansing routine.
              </li>
              <li>
                <strong className='text-xl'>Treatment:</strong> Apply a benzoyl peroxide or adapalene-based treatment to target acne lesions.
              </li>
              <li>
                <strong className='text-xl'>Moisturizer:</strong> Use a lightweight, oil-free moisturizer.
              </li>
            </ol>
            <div className="text-lg">
              <strong>Key Ingredients: </strong> Salicylic acid, niacinamide, benzoyl peroxide, adapalene, hyaluronic acid. <br />
              <strong>Focus: </strong> Targeted treatment, prevention, and hydration. <br />
              <strong>Additional Tips: </strong>  <br />
              <ul className='list-disc list-inside'>
                <li>Consider consulting a dermatologist for persistent acne.</li>
                <li>Maintain a consistent skincare routine.</li>
                <li>Manage stress levels and prioritize a balanced diet.</li>
              </ul>
            </div>
          </div>
        </div>
      )
    }

    else if (selectedAge === '35-44' && selectedConcern === 'fineLines') {
      return (
        <div className="p-7">
          <h2 className='text-4xl font-bold font-serif'>Skincare Routine:</h2>
          <div className="p-3">
            <h2 className='text-2xl font-bold font-serif'>Morning Routine:</h2>
            <ol className='list-decimal list-inside text-lg p-3'>
              <li>
                <strong className='text-xl'>Cleanser:</strong> Use a gentle, hydrating cleanser to remove impurities.
              </li>
              <li>
                <strong className='text-xl'>Toner:</strong> Apply a hydrating toner with hyaluronic acid to boost moisture.
              </li>
              <li>
                <strong className='text-xl'>Serum:</strong> Use a vitamin C serum to brighten and protect against free radicals.
              </li>
              <li>
                <strong className='text-xl'>Moisturizer:</strong> Opt for a hydrating moisturizer with SPF 30 or higher.
              </li>
              <li>
                <strong>Eye cream:</strong> Apply an eye cream targeting fine lines and puffiness.
              </li>
              
            </ol>
            <h2 className='text-2xl font-bold font-serif'>Night Routine:</h2>
            <ol className='list-decimal list-inside text-lg p-3'>
              <li>
                <strong className='text-xl'>Cleanser:</strong> Repeat the morning cleansing routine.
              </li>
              <li>
                <strong className='text-xl'>Treatment:</strong> Introduce a retinol or retinoid serum (starting with a lower concentration) to stimulate collagen production.
              </li>
              <li>
                <strong className='text-xl'>Moisturizer:</strong> Use a rich, hydrating night cream to lock in moisture.
              </li>
              <li>
                <strong className='text-xl'>Eye cream:</strong> Reapply the eye cream for extra nourishment.
              </li>
            </ol>
            <div className="text-lg">
              <strong>Key Ingredients: </strong> Hyaluronic acid, vitamin C, retinol/retinoids, SPF. <br />
              <strong>Focus: </strong> Anti-aging, collagen stimulation, and hydration. <br />
              <strong>Additional Tips: </strong>  <br />
              <ul className='list-disc list-inside'>
                <li>Gradually increase the strength of your retinol or retinoid product as your skin tolerates it.</li>
                <li>Consider incorporating peptides and hyaluronic acid for added benefits.</li>
                <li>Prioritize a healthy lifestyle with adequate sleep, hydration, and nutrition.</li>
              </ul>
            </div>
          </div>
        </div>
      )
    }

    else if (selectedAge === '35-44' && selectedConcern === 'darkSpots') {
      return (
        <div className="p-7">
          <h2 className='text-4xl font-bold font-serif'>Skincare Routine:</h2>
          <div className="p-3">
            <h2 className='text-2xl font-bold font-serif'>Morning Routine:</h2>
            <ol className='list-decimal list-inside text-lg p-3'>
              <li>
                <strong className='text-xl'>Cleanser:</strong> Use a gentle, brightening cleanser to remove impurities.
              </li>
              <li>
                <strong className='text-xl'>Toner:</strong> Apply a vitamin C and niacinamide-infused toner to even skin tone.
              </li>
              <li>
                <strong>Serum:</strong> Use a vitamin C serum for antioxidant protection and brightening.
              </li>
              <li>
                <strong className='text-xl'>Moisturizer:</strong> Opt for a hydrating moisturizer with SPF 30 or higher.
              </li>
              
            </ol>
            <h2 className='text-2xl font-bold font-serif'>Night Routine:</h2>
            <ol className='list-decimal list-inside text-lg p-3'>
              <li>
                <strong className='text-xl'>Cleanser:</strong> Repeat the morning cleansing routine.
              </li>
              <li>
                <strong className='text-xl'>Treatment:</strong> Apply a gentle exfoliant with alpha-hydroxy acids (AHAs) or beta-hydroxy acids (BHAs) to promote cell turnover.
              </li>
              <li>
                <strong className='text-xl'>Serum:</strong> Consider using a serum with hydroquinone or kojic acid for targeted pigmentation treatment.
              </li>
              <li>
                <strong className='text-xl'>Moisturizer:</strong> Use a hydrating moisturizer to lock in moisture.
              </li>
            </ol>
            <div className="text-lg">
              <strong>Key Ingredients: </strong> Vitamin C, niacinamide, AHAs, BHAs, hydroquinone, kojic acid, SPF. <br />
              <strong>Focus: </strong> Brightening, exfoliation, and sun protection. <br />
              <strong>Additional Tips: </strong>  <br />
              <ul className='list-disc list-inside'>
                <li>Consistent sun protection is crucial to prevent further pigmentation.</li>
                <li>Patience is key, as it may take several weeks to see improvement.</li>
                <li>Consider consulting a dermatologist for persistent or severe hyperpigmentation.</li>
              </ul>
            </div>
          </div>
        </div>
      )
    }

    else if (selectedAge === '35-44' && selectedConcern === 'dryness') {
      return (
        <div className="p-7">
          <h2 className='text-4xl font-bold font-serif'>Skincare Routine:</h2>
          <div className="p-3">
            <h2 className='text-2xl font-bold font-serif'>Morning Routine:</h2>
            <ol className='list-decimal list-inside text-lg p-3'>
              <li>
                <strong className='text-xl'>Cleanser:</strong> Use a gentle, creamy cleanser to avoid stripping the skin's natural oils.
              </li>
              <li>
                <strong className='text-xl'>Toner:</strong> Apply a hydrating toner with hyaluronic acid to quench thirst.
              </li>
              <li>
                <strong className='text-xl'>Serum:</strong> : Use a hyaluronic acid serum for an extra hydration boost.
              </li>
              <li>
                <strong className='text-xl'>Moisturizer:</strong> Opt for a rich, creamy moisturizer containing ceramides to strengthen the skin barrier.
              </li>
              <li>
                <strong>SPF:</strong> Apply a broad-spectrum sunscreen with SPF 30 or higher.
              </li>
              
            </ol>
            <h2 className='text-2xl font-bold font-serif'>Night Routine:</h2>
            <ol className='list-decimal list-inside text-lg p-3'>
              <li>
                <strong className='text-xl'>Cleanser:</strong> Repeat the morning cleansing routine.
              </li>
              <li>
                <strong className='text-xl'>Treatment:</strong> Apply a hydrating face mask once or twice a week.
              </li>
              <li>
                <strong className='text-xl'>Moisturizer:</strong> Use an occlusive night cream to seal in moisture.
              </li>
            </ol>
            <div className="text-lg">
              <strong>Key Ingredients: </strong> Hyaluronic acid, ceramides, occlusive moisturizers. <br />
              <strong>Focus: </strong>  <br />
              <strong>Additional Tips: </strong> Intense hydration and barrier repair. <br />
              <ul className='list-disc list-inside'>
                <li>Avoid long, hot showers as they can exacerbate dryness.</li>
                <li>Use lukewarm water when cleansing your face.</li>
                <li>Consider using a humidifier, especially during dry weather.</li>
              </ul>
            </div>
          </div>
        </div>
      )
    }

    else if (selectedAge === '35-44' && selectedConcern === 'redness') {
      return (
        <div className="p-7">
          <h2 className='text-4xl font-bold font-serif'>Skincare Routine:</h2>
          <div className="p-3">
            <h2 className='text-2xl font-bold font-serif'>Morning Routine:</h2>
            <ol className='list-decimal list-inside text-lg p-3'>
              <li>
                <strong className='text-xl'>Cleanser:</strong> Use a gentle, creamy cleanser without sulfates or fragrances.
              </li>
              <li>
                <strong className='text-xl'>Toner:</strong> Apply a hydrating and soothing toner with aloe vera or chamomile.
              </li>
              <li>
                <strong className='text-xl'>Serum:</strong> Use a niacinamide serum to calm redness and improve skin texture.
              </li>
              <li>
                <strong className='text-xl'>Moisturizer:</strong> Opt for a lightweight, oil-free moisturizer containing centella asiatica to soothe and protect.
              </li>
              <li>
                <strong>SPF:</strong> Apply a broad-spectrum sunscreen with SPF 30 or higher.
              </li>
              
            </ol>
            <h2 className='text-2xl font-bold font-serif'>Night Routine:</h2>
            <ol className='list-decimal list-inside text-lg p-3'>
              <li>
                <strong className='text-xl'>Cleanser:</strong> Repeat the morning cleansing routine.
              </li>
              <li>
                <strong className='text-xl'>Treatment:</strong> Apply a calming face mask once or twice a week.
              </li>
              <li>
                <strong className='text-xl'>Moisturizer:</strong> Use a rich, cream-based moisturizer with ceramides to strengthen the skin barrier.
              </li>
            </ol>
            <div className="text-lg">
              <strong>Key Ingredients: </strong> Niacinamide, centella asiatica, ceramides, aloe vera, chamomile. <br />
              <strong>Focus: </strong> Calming, hydration, and barrier repair. <br />
              <strong>Additional Tips: </strong>  <br />
              <ul className='list-disc list-inside'>
                <li>Avoid harsh exfoliants and hot water.</li>
                <li>Choose hypoallergenic and fragrance-free products.</li>
                <li>Manage stress through relaxation techniques.</li>
              </ul>
            </div>
          </div>
        </div>
      )
    }

    else if (selectedAge === 'above 45' && selectedConcern === 'acne') {
      return (
        <div className="p-7">
          <h2 className='text-4xl font-bold font-serif'>Skincare Routine:</h2>
          <div className="p-3">
            <h2 className='text-2xl font-bold font-serif'>Morning Routine:</h2>
            <ol className='list-decimal list-inside text-lg p-3'>
              <li>
                <strong className='text-xl'>Cleanser:</strong> Use a gentle, oil-free cleanser containing salicylic acid to remove excess sebum.
              </li>
              <li>
                <strong className='text-xl'>Toner:</strong> Apply a clarifying toner with witch hazel to balance oil production.
              </li>
              <li>
                <strong className='text-xl'>Serum:</strong> Use a niacinamide serum to regulate sebum and improve skin texture.
              </li>
              <li>
                <strong className='text-xl'>Moisturizer:</strong> Opt for a lightweight, oil-free moisturizer with hyaluronic acid for hydration.
              </li>
              <li>
                <strong>SPF:</strong> Apply a broad-spectrum sunscreen with SPF 30 or higher.
              </li>
              
            </ol>
            <h2 className='text-2xl font-bold font-serif'>Night Routine:</h2>
            <ol className='list-decimal list-inside text-lg p-3'>
              <li>
                <strong className='text-xl'>Cleanser:</strong> Repeat the morning cleansing routine.
              </li>
              <li>
                <strong className='text-xl'>Treatment:</strong> Apply a benzoyl peroxide or adapalene-based treatment to target acne lesions.
              </li>
              <li>
                <strong className='text-xl'>Moisturizer:</strong> Use a lightweight, oil-free moisturizer.
              </li>
            </ol>
            <div className="text-lg">
              <strong>Key Ingredients: </strong> Salicylic acid, niacinamide, benzoyl peroxide, adapalene, hyaluronic acid. <br />
              <strong>Focus: </strong> Targeted treatment, prevention, and hydration. <br />
              <strong>Additional Tips: </strong>  <br />
              <ul className='list-disc list-inside'>
                <li>Consider consulting a dermatologist for persistent acne.</li>
                <li>Maintain a consistent skincare routine.</li>
                <li>Manage stress levels and prioritize a balanced diet.</li>
              </ul>
            </div>
          </div>
        </div>
      )
    }

    else if (selectedAge === 'above 45' && selectedConcern === 'fineLines') {
      return (
        <div className="p-7">
          <h2 className='text-4xl font-bold font-serif'>Skincare Routine:</h2>
          <div className="p-3">
            <h2 className='text-2xl font-bold font-serif'>Morning Routine:</h2>
            <ol className='list-decimal list-inside text-lg p-3'>
              <li>
                <strong className='text-xl'>Cleanser:</strong> Use a gentle, hydrating cleanser to remove impurities.
              </li>
              <li>
                <strong className='text-xl'>Toner:</strong> Apply a hydrating toner with hyaluronic acid to boost moisture.
              </li>
              <li>
                <strong className='text-xl'>Serum:</strong> Use a vitamin C serum to brighten and protect against free radicals.
              </li>
              <li>
                <strong className='text-xl'>Moisturizer:</strong> Opt for a hydrating moisturizer with SPF 30 or higher.
              </li>
              <li>
                <strong>Eye cream:</strong> Apply an eye cream targeting fine lines and puffiness.
              </li>
              
            </ol>
            <h2 className='text-2xl font-bold font-serif'>Night Routine:</h2>
            <ol className='list-decimal list-inside text-lg p-3'>
              <li>
                <strong className='text-xl'>Cleanser:</strong> Repeat the morning cleansing routine.
              </li>
              <li>
                <strong className='text-xl'>Treatment:</strong> Introduce a retinol or retinoid serum (starting with a lower concentration) to stimulate collagen production.
              </li>
              <li>
                <strong className='text-xl'>Moisturizer:</strong> Use a rich, hydrating night cream to lock in moisture.
              </li>
              <li>
                <strong className='text-xl'>Eye cream:</strong> Reapply the eye cream for extra nourishment.
              </li>
            </ol>
            <div className="text-lg">
              <strong>Key Ingredients: </strong> Hyaluronic acid, vitamin C, retinol/retinoids, SPF. <br />
              <strong>Focus: </strong> Anti-aging, collagen stimulation, and hydration. <br />
              <strong>Additional Tips: </strong>  <br />
              <ul className='list-disc list-inside'>
                <li>Gradually increase the strength of your retinol or retinoid product as your skin tolerates it.</li>
                <li>Consider incorporating peptides and hyaluronic acid for added benefits.</li>
                <li>Prioritize a healthy lifestyle with adequate sleep, hydration, and nutrition.</li>
              </ul>
            </div>
          </div>
        </div>
      )
    }

    else if (selectedAge === 'above 45' && selectedConcern === 'darkSpots') {
      return (
        <div className="p-7">
          <h2 className='text-4xl font-bold font-serif'>Skincare Routine:</h2>
          <div className="p-3">
            <h2 className='text-2xl font-bold font-serif'>Morning Routine:</h2>
            <ol className='list-decimal list-inside text-lg p-3'>
              <li>
                <strong className='text-xl'>Cleanser:</strong> Use a gentle, brightening cleanser to remove impurities.
              </li>
              <li>
                <strong className='text-xl'>Toner:</strong> Apply a vitamin C and niacinamide-infused toner to even skin tone.
              </li>
              <li>
                <strong className='text-xl'>Serum:</strong> Use a vitamin C serum for antioxidant protection and brightening.
              </li>
              <li>
                <strong className='text-xl'>Moisturizer:</strong> Opt for a hydrating moisturizer with SPF 30 or higher.
              </li>
              
            </ol>
            <h2 className='text-2xl font-bold font-serif'>Night Routine:</h2>
            <ol className='list-decimal list-inside text-lg p-3'>
              <li>
                <strong className='text-xl'>Cleanser:</strong> Repeat the morning cleansing routine.
              </li>
              <li>
                <strong className='text-xl'>Treatment:</strong> Apply a gentle exfoliant with alpha-hydroxy acids (AHAs) or beta-hydroxy acids (BHAs) to promote cell turnover.
              </li>
              <li>
                <strong className='text-xl'>Serum:</strong> Consider using a serum with hydroquinone or kojic acid for targeted pigmentation treatment.
              </li>
              <li>
                <strong className='text-xl'>Moisturizer:</strong> Use a hydrating moisturizer to lock in moisture.
              </li>
            </ol>
            <div className="text-lg">
              <strong>Key Ingredients: </strong> Vitamin C, niacinamide, AHAs, BHAs, hydroquinone, kojic acid, SPF. <br />
              <strong>Focus: </strong> Brightening, exfoliation, and sun protection. <br />
              <strong>Additional Tips: </strong>  <br />
              <ul className='list-disc list-inside'>
                <li>Consistent sun protection is crucial to prevent further pigmentation.</li>
                <li>Patience is key, as it may take several weeks to see improvement.</li>
                <li>Consider consulting a dermatologist for persistent or severe hyperpigmentation.</li>
              </ul>
            </div>
          </div>
        </div>
      )
    }

    else if (selectedAge === 'above 45' && selectedConcern === 'dryness') {
      return (
        <div className="p-7">
          <h2 className='text-4xl font-bold font-serif'>Skincare Routine:</h2>
          <div className="p-3">
            <h2 className='text-2xl font-bold font-serif'>Morning Routine:</h2>
            <ol className='list-decimal list-inside text-lg p-3'>
              <li>
                <strong className='text-xl'>Cleanser:</strong> Use a gentle, creamy cleanser to avoid stripping the skin's natural oils.
              </li>
              <li>
                <strong className='text-xl'>Toner:</strong> Apply a hydrating toner with hyaluronic acid to quench thirst.
              </li>
              <li>
                <strong className='text-xl'>Serum:</strong> Use a hyaluronic acid serum for an extra hydration boost.
              </li>
              <li>
                <strong className='text-xl'>Moisturizer:</strong> Opt for a rich, creamy moisturizer containing ceramides to strengthen the skin barrier.
              </li>
              <li>
                <strong>SPF:</strong> Apply a broad-spectrum sunscreen with SPF 30 or higher.
              </li>
              
            </ol>
            <h2 className='text-2xl font-bold font-serif'>Night Routine:</h2>
            <ol className='list-decimal list-inside text-lg p-3'>
              <li>
                <strong className='text-xl'>Cleanser:</strong> Repeat the morning cleansing routine.
              </li>
              <li>
                <strong className='text-xl'>Treatment:</strong> Apply a hydrating face mask once or twice a week.
              </li>
              <li>
                <strong className='text-xl'>Moisturizer:</strong> Use an occlusive night cream to seal in moisture.
              </li>
            </ol>
            <div className="text-lg">
              <strong>Key Ingredients: </strong> Hyaluronic acid, ceramides, occlusive moisturizers. <br />
              <strong>Focus: </strong> Intense hydration and barrier repair. <br />
              <strong>Additional Tips: </strong>  <br />
              <ul className='list-disc list-inside'>
                <li>Avoid long, hot showers as they can exacerbate dryness.</li>
                <li>Use lukewarm water when cleansing your face.</li>
                <li>Consider using a humidifier, especially during dry weather.</li>
              </ul>
            </div>
          </div>
        </div>
      )
    }

    else if (selectedAge === 'above 45' && selectedConcern === 'redness') {
      return (
        <div className="p-7">
          <h2 className='text-4xl font-bold font-serif'>Skincare Routine:</h2>
          <div className="p-3">
            <h2 className='text-2xl font-bold font-serif'>Morning Routine:</h2>
            <ol className='list-decimal list-inside text-lg p-3'>
              <li>
                <strong className='text-xl'>Cleanser:</strong> Use a gentle, creamy cleanser without sulfates or fragrances.
              </li>
              <li>
                <strong className='text-xl'>Toner:</strong> Apply a hydrating and soothing toner with aloe vera or chamomile.
              </li>
              <li>
                <strong className='text-xl'>Serum:</strong> Use a niacinamide serum to calm redness and improve skin texture.
              </li>
              <li>
                <strong className='text-xl'>Moisturizer:</strong> Opt for a lightweight, oil-free moisturizer containing centella asiatica to soothe and protect.
              </li>
              <li>
                <strong>SPF:</strong> Apply a broad-spectrum sunscreen with SPF 30 or higher.
              </li>
              
            </ol>
            <h2 className='text-2xl font-bold font-serif'>Night Routine:</h2>
            <ol className='list-decimal list-inside text-lg p-3'>
              <li>
                <strong className='text-xl'>Cleanser:</strong> Repeat the morning cleansing routine.
              </li>
              <li>
                <strong className='text-xl'>Treatment:</strong> Apply a calming face mask once or twice a week.
              </li>
              <li>
                <strong className='text-xl'>Moisturizer:</strong> Use a rich, cream-based moisturizer with ceramides to strengthen the skin barrier.
              </li>
            </ol>
            <div className="text-lg">
              <strong>Key Ingredients: </strong> Niacinamide, centella asiatica, ceramides, aloe vera, chamomile. <br />
              <strong>Focus: </strong> Calming, hydration, and barrier repair. <br />
              <strong>Additional Tips: </strong>  <br />
              <ul className='list-disc list-inside'>
                <li>Avoid harsh exfoliants and hot water.</li>
                <li>Choose hypoallergenic and fragrance-free products.</li>
                <li>Manage stress through relaxation techniques.</li>
              </ul>
            </div>
          </div>
        </div>
      )
    }

    else {
      return <p>No Recommendations found!</p>;
    }
  }

  return (
    <>
      <div className="m-8 -mt-16 lg:pt-20 lg:m-16">
        <h1 className="text-4xl lg:text-5xl font-bold underline underline-offset-8" style={{ fontFamily: "'Cinzel', serif" }}>Recommended Skin Care:</h1>
      </div>

      <div className="lg:m-16 rounded-3xl text-center text-white" style={{ backgroundImage: `url(${'https://images.pexels.com/photos/3733925/pexels-photo-3733925.jpeg?auto=compress&cs=tinysrgb&w=1280'})` }}>

        <div className="">
          <p>{handleClickResults()}</p>   <br />
        </div>
      </div>

      <div className="lg:m-16">
        <h1 className="text-2xl lg:text-3xl m-4 text-green-600 font-bold" style={{fontFamily: "'Dancing Script', cursive"}}>TRENDING SKINCARE ROUNTINE THAT CAN BE USED ON DAILY BASIS 😊:-</h1>
        <div className="lg:grid lg:grid-rows-2 lg:grid-cols-2 lg:gap-x-4 lg:gap-y-4">
          <div className="p-5 rounded-3xl bg-yellow-200 row-start-1">
            <h2 className="text-2xl font-bold font-serif">Morning Routine:</h2>
            <p className="p-5 text-lg">
              <ul className='list-decimal list-inside'>
                <li>Cleanser:- Gentle foaming cleanser with a low pH.</li>
                <li>Toner:- Hydrating toner with hyaluronic acid.</li>
                <li>Essence:- Hydrating essence with fermented ingredients (e.g., galactomyces).</li>
                <li>Serum:- Vitamin C or niacinamide serum.</li>
                <li>Moisturizer:- Lightweight moisturizer with ceramides.</li>
                <li>Sunscreen:- Broad-spectrum SPF 50+.</li>
              </ul>
            </p>
          </div>
          <div className="p-5 rounded-3xl text-white bg-blue-400 row-start-2">
            <h2 className="text-2xl font-bold font-serif">Night Routine:</h2>
            <p className="p-5 text-lg">
              <ul className='list-decimal list-inside'>
                <li>Cleanser:- Oil cleanser (double cleanse with a foam cleanser if needed).</li>
                <li>Toner:- Hydrating toner.</li>
                <li>Essence:- Hydrating essence.</li>
                <li>Serum:- Treatment serum based on skin concern (e.g., retinoid, peptides).</li>
                <li>Sheet Mask:- 2-3 times a week for added hydration and treatment.</li>
                <li>Moisturizer:- Rich moisturizer or sleeping pack.</li>
              </ul>
            </p>
          </div>
          <div className="row-span-2">
            <img className='rounded-3xl object-cover h-full' src="https://i.pinimg.com/564x/4b/76/7f/4b767f54348cf084efa7cb26f534cd32.jpg" alt="" />
          </div>
            {/* <img className='rounded-3xl' src="https://images.pexels.com/photos/10536278/pexels-photo-10536278.jpeg?auto=compress&cs=tinysrgb&w=1280" alt="" />
          </div> */}
        </div>

        <div className="text-center p-10">
          <h2 className="text-lg lg:text-xl">SPECIAL NOTE BECAUSE WE CARE ABOUT YOU😊:- </h2>
          <p className="font-semibold text-xl lg:text-2xl" style={{ fontFamily: "'Cinzel', serif" }}>“Remember FRIEND , consistency is key, and always patch-test new products and ingredients to ensure they work well with your skin….”</p>
        </div>
      </div>

    </>
  )
}

export default Recommendations
