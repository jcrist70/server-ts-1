type Variant = 'critical' | 'failure' | 'damage' | 'ok';

type Props = (
    | {
        message: string;
        messageId?: never;
      }
    | {
        message?: never;
        messageId: string;
      }
  ) & {
    variant?: Variant;
  };

  export function statusHandler(props: Props) {
    return props;
  }
  