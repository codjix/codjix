type Response<TResult, TMessage> =
  | { ok: true; result: TResult } // result is required
  | { ok: false; message: TMessage | string }; // message is required

type Handler<TResult, TMessage> = (
  resolve: (result: TResult) => void,
  reject: (message: TMessage) => void
) => PromiseLike<void>;

export const SafePromise = <TResult, TMessage = string>(handler: Handler<TResult, TMessage>) =>
  new Promise<Response<TResult, TMessage>>(async fallback => {
    try {
      const resolve = (result: TResult) => fallback({ ok: true, result });
      const reject = (message: TMessage) => fallback({ ok: false, message });
      await handler(resolve, reject);
    } catch ({ message }: any) {
      fallback({ ok: false, message });
    }
  });
