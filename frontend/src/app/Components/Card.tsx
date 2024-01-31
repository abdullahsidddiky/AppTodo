export default function Card(data: any) {
  return (
    <ul role="list" className="divide-y divide-dark-500">
      <li className="flex justify-between gap-x-6 py-5">
        <div className="flex min-w-0 gap-x-4">
          <div className="min-w-0 flex-auto">
            <p className="text-sm font-semibold leading-6 text-gray-900">
              {data.id}
            </p>
            <p className="mt-1 truncate text-xs leading-5 text-gray-500">
              {data.content}
            </p>
          </div>
        </div>
      </li>
    </ul>
  );
}
