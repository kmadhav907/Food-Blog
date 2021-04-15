function Skeleton() {
  return (
    <div className='skeleton'>
      <div className='skeleton-banner'></div>
      <div className='skeleton-header'></div>
      <div claassName='skeleton-content'></div>

      <style jsx>{`
        .skeleton {
          max-width: 1200px;
          margin: 20px auto;
        }
        .skeleton > div {
          background: #dbcc1a;
          border-radius: 4px;
          margin: 20px 0;
        }
        .skeleton-banner {
          padding: 12% 0;
        }
        .skeleton-header {
          padding: 15px 0;
          max-width: 500px;
        }
        .skeleton-content {
          padding: 8px 0;
          max-width: 1000px;
        }
      `}</style>
    </div>
  );
}

export default Skeleton;
