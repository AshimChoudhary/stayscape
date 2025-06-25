'use client';

import useRentModel from '@/app/hooks/useRentModels';
import Modals from './Modals';
import { useMemo, useState } from 'react';
import Heading from '../Heading';
import { categoriesValues } from '../navbar/Categories';
import CategoryInput from '../Inputs/CategoryInput';
import { FieldValues, useForm } from 'react-hook-form';
import CountrySelect from '../Inputs/CountrySelect';
import Maps from '../Maps';

enum STEPS {
  CATEGORY = 0,
  LOCATION = 1,
  INFO = 2,
  IMAGE = 3,
  DESCRIPTION = 4,
  PRICE = 5,
}

const RentModels = () => {
  const rentModel = useRentModel();

  const [steps, setSteps] = useState(STEPS.CATEGORY);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      category: '',
      location: null,
      guestCount: 1,
      roomCount: 1,
      bathRoomCount: 1,
      imgSrc: '',
      price: 1,
      title: '',
      description: '',
    },
  });

  const category = watch('category');
  const location = watch('location');
  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  const onBack = () => {
    setSteps((value) => value - 1);
  };

  const onNext = () => {
    setSteps((value) => value + 1);
  };

  const actionLabel = useMemo(() => {
    if (steps == STEPS.PRICE) {
      return 'Create';
    }
    return 'Next';
  }, [steps]);

  const secondaryActionLabel = useMemo(() => {
    if (steps == STEPS.CATEGORY) {
      return undefined;
    }
    return 'Back';
  }, [steps]);

  let bodyContent = (
    <div className="flex flex-col gap-8">
      <Heading
        title="Which of these best describes your place?"
        subtitle="Pick an Category"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[50vh] overflow-y-auto">
        {categoriesValues.map((item) => (
          <div className="col-span-1" key={item.label}>
            <CategoryInput
              onClick={(category) => setCustomValue('category', category)}
              selected={category == item.label}
              label={item.label}
              icon={item.icon}
            />
          </div>
        ))}
      </div>
    </div>
  );

  if (steps == STEPS.LOCATION) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Where is your place located?"
          subtitle="Help guests find you!"
        />
        <CountrySelect
          value={location}
          onChange={(value) => setCustomValue('location', value)}
        />
        <Maps />
      </div>
    );
  }

  return (
    <Modals
      isOpen={rentModel.isOpen}
      title="StayScape Your Home"
      onClose={rentModel.onClose}
      onSubmit={onNext}
      actionLabel={actionLabel}
      secondaryActionLabel={secondaryActionLabel}
      secondaryAction={steps == STEPS.CATEGORY ? undefined : onBack}
      body={bodyContent}
    />
  );
};

export default RentModels;
