module EnumConstants

  AGREEMENTS = %w(yes).freeze

  BOOLEANS = %w(yes no).freeze

  BINARY_GENDERS = %w(female male).freeze

  CARPOOL_OPTIONS = %w(
    Not\ interested
    Interested\ -\ I\ can\ provide\ a\ ride
    Interested\ -\ I\ need\ a\ ride
  ).freeze

  CEREMONY_OPTIONS = %w(
    My\ family/friends\ will\ be\ attending\ the\ Family\ and\ Friends\ Program\ and\ Closing\ Ceremonies
    My\ family/friends\ will\ only\ be\ attending\ Closing\ Ceremonies
    My\ family/friends\ will\ not\ attend\ either\ event
  ).freeze

  DIETARY_RESTRICTIONS = %w(
    None
    Dairy\ Free
    Gluten\ Free
    Nut\ Allergy
    Vegan
    Vegetarian
  ).freeze

  HEALTH_CONDITIONS = %w(
    None
    Asthma
    Attention\ Deficit-Hyperactivity
    Chronic\ Ear\ Infections
    Diabetes
    Epilepsy/Seizure\ Disorder
    Frequent\ Migraine\ Headaches
    Heart\ Problems
    Stomach\ Aches/Issues
    Vision/Hearing\ Problems
    Other
  ).freeze

  GENDERS = %w(female male other).freeze

  GUARDIAN_RELATIONSHIPS = %w(
    mother father aunt uncle
    grandmother grandfather
    stepmother stepfather guardian
    other
  ).freeze

  PHONE_TYPES = %w(cell home work).freeze

  SHIRT_SIZES = %w(S M L XL XXL other).freeze

  STATES = %w(
    AL AK AZ AR CA CO CT DE FL GA
    HI ID IL IN IA KS KY LA ME MD
    MA MI MN MS MO MT NE NV NH NJ
    NM NY NC ND OH OK OR PA RI SC
    SD TN TX UT VT VA WA WV WI WY
  ).freeze

  TRANSPORTATION_OPTIONS = %w(
    Parent/Guardian\ Driving\ Me
    Driving\ Myself
    Public\ Transportation\ -\ Plane
    Public\ Transportation\ -\ Train
    Public\ Transportation\ -\ Bus
  ).freeze

end
