import * as React from "react";

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type TProps = Omit<React.HTMLProps<HTMLInputElement>, "onChange"> & {
  mask: string;
  value: string;
  maskSymbol?: any;
  onChange: (value: string) => void;
};

// export class MaskedInput extends React.Component<TProps> {
//   handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { onChange } = this.props;
//     const { value } = e.currentTarget;
//     const cleanValue = value.replace(/[^\d]/g, "");
//     onChange(cleanValue);
//   };

//   static format(value: string, mask: string): string {
//     let i = 0;
//     let lastReplacedIndex = -1;
//     const filledMask = mask.replace(/#/g, (_, j) => {
//       if (i >= value.length) {
//         return "#";
//       }
//       lastReplacedIndex = j;
//       return value[i++];
//     });
//     return filledMask.substring(0, lastReplacedIndex + 1);
//   }

//   render() {
//     const { value, mask, onChange, ...rest } = this.props;
//     return (
//       <input
//         onChange={this.handleChange}
//         value={MaskedInput.format(value, mask)}
//         {...rest}
//       />
//     );
//   }
// }

// FUNCTIONAL COMPONENT GOES HERE
export const MaskedInput: React.FC<TProps> = ({
  value,
  mask,
  onChange,
  ...rest
}): JSX.Element => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    const cleanValue = value.replace(/[^\d]/g, "");
    onChange(cleanValue);
  };

  function format(value: string, newMask: string): string | undefined {
    // console.log(
    //   "newMask",
    //   newMask.split("").filter((x: any) => x === "#").length
    // );
    // const maxLength = newMask.split("").filter((x: any) => x === "#")?.length;
    let i = 0;
    let lastReplacedIndex = -1;
    const filledMask = newMask.replace(/#/g, (_, j) => {
      // console.log("i", i);
      if (i >= value.length) {
        return "#";
      }
      lastReplacedIndex = j;
      return value[i++];
    });
    const result = filledMask.substring(0, lastReplacedIndex + 1);
    // if (result.length <= maxLength)
    return result;
  }
  return (
    <input value={format(value, mask)} onChange={handleChange} {...rest} />
  );
};
