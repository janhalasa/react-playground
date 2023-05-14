import { DeepMap, FieldError, Path, RegisterOptions, UseFormRegister } from "react-hook-form";
import { UseFormWatch } from "react-hook-form/dist/types/form";
import { Address } from "./domain";

export type AddressInputProps<TFormValues extends Record<string, unknown>> = {
    path: Path<TFormValues>;
    rules?: RegisterOptions;
    register?: UseFormRegister<any>; // FIXME: This 'any' should probably be TFormValues, but it throws typing errors (TS typing hell). Same for the errors and watch.
    errors?: Partial<DeepMap<any, FieldError>>;
    defaultValue?: Address;
    watch: UseFormWatch<any>
};

/**
 *
 */
export function AddressInput({ path, register, rules, errors, watch }: AddressInputProps<Record<string, unknown>>) {
    const required = Boolean(rules?.required || watch('street') || watch('city'));
    return(
        <>
            <div>
                <label>Street: <input {...(register && register(`${path}.street`, { required: { value: required, message: 'Street is required' }}))}/></label>
            <div>{errors && errors[path]?.street?.message}</div>
            </div>
            <div>
            <label>City: <input {...(register && register(`${path}.city`, { required: { value: required, message: 'City is required' }}))}/></label>
            <div>{errors && errors[path]?.city?.message}</div>
            </div>
            </>
        );
}
